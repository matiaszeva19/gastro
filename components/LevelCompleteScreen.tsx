
import React from 'react';
import { CheckCircle, XCircle, ArrowRight, RotateCw } from 'lucide-react';

interface LevelCompleteScreenProps {
  result: { score: number; passed: boolean };
  levelName: string;
  passingScore: number;
  onContinue: () => void;
  onRetry: () => void;
}

const LevelCompleteScreen: React.FC<LevelCompleteScreenProps> = ({ result, levelName, passingScore, onContinue, onRetry }) => {
  const { score, passed } = result;
  
  const scoreColor = passed ? 'text-green-400' : 'text-red-400';

  return (
    <div className="text-center p-8 max-w-2xl mx-auto bg-gray-800 rounded-2xl shadow-2xl border border-gray-700 animate-fade-in">
      {passed ? (
        <CheckCircle className="mx-auto h-20 w-20 text-green-400 mb-6" />
      ) : (
        <XCircle className="mx-auto h-20 w-20 text-red-400 mb-6" />
      )}
      <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
        {passed ? '¡Nivel Superado!' : '¡A Repasar!'}
      </h1>
      <p className="text-lg text-gray-300 mb-4">
        Resultado de: <span className="font-semibold text-cyan-300">{levelName}</span>
      </p>
      
      <div className="bg-gray-900 rounded-lg p-4 mb-8">
        <p className="text-xl text-gray-200">Tu Puntuación:</p>
        <p className={`text-5xl font-bold my-2 ${scoreColor}`}>{score.toFixed(1)}%</p>
        <p className="text-md text-gray-400">Puntuación para pasar: {passingScore}%</p>
      </div>

      <p className="text-lg text-gray-300 mb-8">
        {passed 
          ? '¡Excelente trabajo! Estás listo para el siguiente desafío.'
          : 'No te preocupes. ¡La repetición es la clave del éxito! Inténtalo de nuevo.'
        }
      </p>
      
      {passed ? (
        <button
          onClick={onContinue}
          className="w-full md:w-auto bg-green-600 hover:bg-green-500 text-white font-bold py-4 px-12 rounded-lg text-xl transition-transform transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-green-400 shadow-lg flex items-center justify-center mx-auto"
        >
          Continuar al Siguiente Nivel
          <ArrowRight className="ml-3 h-6 w-6" />
        </button>
      ) : (
        <button
          onClick={onRetry}
          className="w-full md:w-auto bg-yellow-500 hover:bg-yellow-400 text-gray-900 font-bold py-4 px-12 rounded-lg text-xl transition-transform transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-yellow-300 shadow-lg flex items-center justify-center mx-auto"
        >
          Reintentar Nivel
          <RotateCw className="ml-3 h-6 w-6" />
        </button>
      )}
    </div>
  );
};

export default LevelCompleteScreen;
