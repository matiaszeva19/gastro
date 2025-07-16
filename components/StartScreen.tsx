
import React from 'react';
import { BrainCircuit } from 'lucide-react';

interface StartScreenProps {
  onStart: () => void;
}

const StartScreen: React.FC<StartScreenProps> = ({ onStart }) => {
  return (
    <div className="text-center p-8 max-w-2xl mx-auto bg-gray-800 rounded-2xl shadow-2xl border border-gray-700 animate-fade-in">
      <BrainCircuit className="mx-auto h-20 w-20 text-cyan-400 mb-6" />
      <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
        Gastronomy Flashcards Pro
      </h1>
      <p className="text-lg text-gray-300 mb-8">
        Prepárate para tu final con este desafío por niveles. Supera cada etapa para desbloquear la siguiente, con una dificultad que aumenta progresivamente. Al final, un repaso completo y un análisis con IA te asegurarán el éxito.
      </p>
      <button
        onClick={onStart}
        className="w-full md:w-auto bg-cyan-500 hover:bg-cyan-400 text-gray-900 font-bold py-4 px-12 rounded-lg text-xl transition-transform transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-cyan-300 shadow-lg"
      >
        Empezar el Desafío
      </button>
    </div>
  );
};

export default StartScreen;
