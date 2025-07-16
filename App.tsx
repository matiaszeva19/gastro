
import React, { useState, useCallback, useMemo } from 'react';
import { GameState, Flashcard, Level } from './types';
import { LEVELS } from './data/flashcards';
import StartScreen from './components/StartScreen';
import StudySession from './components/StudySession';
import ResultsScreen from './components/ResultsScreen';
import LevelCompleteScreen from './components/LevelCompleteScreen';

const App: React.FC = () => {
  const [gameState, setGameState] = useState<GameState>(GameState.Start);
  const [currentLevelIndex, setCurrentLevelIndex] = useState(0);
  const [levelResult, setLevelResult] = useState({ score: 0, passed: false });
  const [globalIncorrect, setGlobalIncorrect] = useState<Map<number, Flashcard>>(new Map());

  const startGame = useCallback(() => {
    setCurrentLevelIndex(0);
    setGlobalIncorrect(new Map());
    setGameState(GameState.Studying);
  }, []);

  const handleLevelEnd = useCallback((score: number, incorrectCards: Flashcard[]) => {
    const currentLevel = LEVELS[currentLevelIndex];
    const passed = score >= currentLevel.passingScore;
    setLevelResult({ score, passed });

    // Add new incorrect cards to the global list
    setGlobalIncorrect(prev => {
        const newIncorrect = new Map(prev);
        incorrectCards.forEach(card => {
            if (!newIncorrect.has(card.id)) {
                newIncorrect.set(card.id, card);
            }
        });
        return newIncorrect;
    });

    setGameState(GameState.LevelComplete);
  }, [currentLevelIndex]);

  const handleContinue = useCallback(() => {
    const nextLevelIndex = currentLevelIndex + 1;
    if (nextLevelIndex < LEVELS.length) {
      setCurrentLevelIndex(nextLevelIndex);
      setGameState(GameState.Studying);
    } else {
      setGameState(GameState.Finished);
    }
  }, [currentLevelIndex]);

  const handleRetry = useCallback(() => {
    // Re-shuffle cards for the current level for a fresh attempt
    LEVELS[currentLevelIndex].cards = [...LEVELS[currentLevelIndex].cards].sort(() => Math.random() - 0.5);
    setGameState(GameState.Studying);
  }, [currentLevelIndex]);

  const incorrectCardsList = useMemo(() => {
     return Array.from(globalIncorrect.values());
  }, [globalIncorrect]);
  
  const currentLevel = LEVELS[currentLevelIndex];

  const renderContent = () => {
    switch (gameState) {
      case GameState.Studying:
        return <StudySession 
                  key={currentLevelIndex} // Force re-mount on level change
                  level={currentLevel}
                  onLevelEnd={handleLevelEnd}
                />;
      case GameState.LevelComplete:
        return <LevelCompleteScreen
                  result={levelResult}
                  levelName={currentLevel.name}
                  passingScore={currentLevel.passingScore}
                  onContinue={handleContinue}
                  onRetry={handleRetry}
               />;
      case GameState.Finished:
        return <ResultsScreen 
                  finalScore={levelResult.score}
                  incorrectCards={incorrectCardsList}
                  onRestart={startGame}
                />;
      case GameState.Start:
      default:
        return <StartScreen onStart={startGame} />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center p-4 font-sans">
      {renderContent()}
    </div>
  );
};

export default App;
