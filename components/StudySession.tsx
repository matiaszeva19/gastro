
import React, { useState, useEffect, useCallback } from 'react';
import type { Flashcard, Level } from '../types';

interface StudySessionProps {
  level: Level;
  onLevelEnd: (score: number, incorrectCards: Flashcard[]) => void;
}

const StudySession: React.FC<StudySessionProps> = ({ level, onLevelEnd }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [incorrectCards, setIncorrectCards] = useState<Flashcard[]>([]);
  const [feedback, setFeedback] = useState<{ selected: string; correct: string } | null>(null);
  
  const totalCards = level.cards.length;
  const currentCard = level.cards[currentIndex];
  
  const handleAnswer = useCallback((selectedAnswer: string) => {
    if (feedback) return; // Prevent multiple answers

    const isCorrect = selectedAnswer === currentCard.answer;
    setFeedback({ selected: selectedAnswer, correct: currentCard.answer });

    if (isCorrect) {
      setCorrectAnswers(prev => prev + 1);
    } else {
      setIncorrectCards(prev => [...prev, currentCard]);
    }

    setTimeout(() => {
      if (currentIndex + 1 < totalCards) {
        setCurrentIndex(prev => prev + 1);
        setFeedback(null);
      } else {
        // Level finished
        const score = ((correctAnswers + (isCorrect ? 1 : 0)) / totalCards) * 100;
        const finalIncorrect = isCorrect ? incorrectCards : [...incorrectCards, currentCard];
        onLevelEnd(score, finalIncorrect);
      }
    }, 1500); // Wait 1.5 seconds to show feedback
  }, [feedback, currentCard, currentIndex, totalCards, onLevelEnd, correctAnswers, incorrectCards]);
  
  if (!currentCard) {
    return null;
  }

  const progress = ((currentIndex) / totalCards) * 100;

  const getButtonClass = (option: string) => {
    if (!feedback) {
      return 'bg-gray-700 hover:bg-gray-600';
    }
    if (option === feedback.correct) {
      return 'bg-green-600 scale-105';
    }
    if (option === feedback.selected && option !== feedback.correct) {
      return 'bg-red-600';
    }
    return 'bg-gray-700 opacity-50';
  };

  return (
    <div className="w-full max-w-3xl flex flex-col items-center animate-fade-in">
      <div className="w-full mb-6">
        <h1 className="text-2xl font-bold text-center text-cyan-400 mb-2">{level.name}</h1>
        <div className="flex justify-between text-sm text-gray-300 mb-1">
          <span>Progreso</span>
          <span>{currentIndex + 1} / {totalCards}</span>
        </div>
        <div className="w-full bg-gray-700 rounded-full h-2.5">
          <div className="bg-cyan-500 h-2.5 rounded-full" style={{ width: `${progress}%`, transition: 'width 0.5s ease-in-out' }}></div>
        </div>
      </div>
      
      <div className="w-full bg-gray-800 rounded-2xl shadow-2xl border border-gray-700 p-6 md:p-8 mb-6 min-h-[15rem] flex flex-col justify-center">
        <span className="text-sm font-semibold text-cyan-400 uppercase">{currentCard.topic}</span>
        <p className="mt-4 text-2xl md:text-3xl font-semibold text-white">{currentCard.question}</p>
      </div>

      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4">
        {currentCard.options.map((option, index) => (
          <button
            key={index}
            onClick={() => handleAnswer(option)}
            disabled={!!feedback}
            className={`p-4 rounded-lg text-white font-semibold text-left transition-all duration-300 ease-in-out transform disabled:cursor-not-allowed ${getButtonClass(option)}`}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
};

export default StudySession;
