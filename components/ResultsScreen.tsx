
import React, { useState, useEffect } from 'react';
import type { Flashcard } from '../types';
import { getAnalysis } from '../services/geminiService';
import Loader from './Loader';
import { Award, BookOpen, RotateCw } from 'lucide-react';

interface ResultsScreenProps {
  finalScore: number;
  incorrectCards: Flashcard[];
  onRestart: () => void;
}

const ResultsScreen: React.FC<ResultsScreenProps> = ({ finalScore, incorrectCards, onRestart }) => {
  const [analysis, setAnalysis] = useState<string>('');
  const [isAnalyzing, setIsAnalyzing] = useState<boolean>(true);

  useEffect(() => {
    const fetchAnalysis = async () => {
      setIsAnalyzing(true);
      const result = await getAnalysis(incorrectCards);
      setAnalysis(result);
      setIsAnalyzing(false);
    };
    fetchAnalysis();
  }, [incorrectCards]);

  const getGradeColor = (g: number) => {
    if (g >= 90) return 'text-green-400';
    if (g >= 70) return 'text-yellow-400';
    return 'text-red-400';
  };

  return (
    <div className="p-4 md:p-8 max-w-4xl w-full bg-gray-800 rounded-2xl shadow-2xl border border-gray-700 animate-fade-in">
      <div className="text-center mb-8">
        <Award className="mx-auto h-20 w-20 text-yellow-400 mb-4" />
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">¡Felicitaciones! ¡Has completado el desafío!</h1>
        <p className="text-lg text-gray-300 mb-2">
          Tu calificación en el Repaso Final fue:
        </p>
        <p className={`text-3xl md:text-4xl font-bold ${getGradeColor(finalScore)}`}>{finalScore.toFixed(1)}%</p>
      </div>

      <div className="bg-gray-900 p-6 rounded-lg border border-gray-600">
        <h2 className="text-2xl font-bold text-cyan-400 mb-4 flex items-center">
            <BookOpen className="mr-3"/>
            Análisis Final y Sugerencias de la IA
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 max-h-60 overflow-y-auto custom-scrollbar">
          {isAnalyzing ? <Loader /> : 
            analysis.split('\n').map((line, index) => {
              if (line.startsWith('###')) return <h3 key={index} className="text-lg font-semibold text-cyan-300 mt-4 mb-2">{line.replace('###', '')}</h3>
              if (line.startsWith('**')) return <p key={index} className="font-bold my-1">{line.replace(/\*\*/g, '')}</p>
              if (line.startsWith('* ')) return <li key={index} className="ml-4">{line.replace('* ', '')}</li>
              return <p key={index} className="my-2">{line}</p>
            })
          }
        </div>
      </div>
      
      {incorrectCards.length > 0 && (
         <div className="mt-6 bg-gray-900 p-6 rounded-lg border border-gray-600">
            <h3 className="text-xl font-bold text-red-400 mb-3">Tarjetas a Repasar Globalmente:</h3>
            <ul className="list-disc list-inside text-gray-300 max-h-40 overflow-y-auto custom-scrollbar">
                {incorrectCards.map(card => (
                    <li key={card.id} className="mb-1">{card.question}</li>
                ))}
            </ul>
        </div>
      )}

      <div className="mt-8 text-center">
        <button
          onClick={onRestart}
          className="bg-cyan-500 hover:bg-cyan-400 text-gray-900 font-bold py-3 px-8 rounded-lg text-lg transition-transform transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-cyan-300 shadow-lg flex items-center mx-auto"
        >
          <RotateCw className="mr-2 h-5 w-5"/>
          Empezar de Nuevo
        </button>
      </div>
    </div>
  );
};

export default ResultsScreen;
