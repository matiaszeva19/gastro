import { GoogleGenAI } from "@google/genai";
import type { Flashcard } from '../types';

// The API key MUST be handled as an environment variable.
// It is assumed to be available in the execution environment via process.env.API_KEY.
const API_KEY = process.env.API_KEY;

if (!API_KEY) {
  console.warn("API Key for Gemini not found. Analysis feature will provide a fallback message.");
}

const ai = new GoogleGenAI({ apiKey: API_KEY! });

export const getAnalysis = async (failedCards: Flashcard[]): Promise<string> => {
  if (!API_KEY) {
    return `La función de análisis con IA no está disponible en este momento.
    
**Sugerencia:** Concéntrate en repasar las tarjetas que marcaste como incorrectas. ¡Identificar tus errores es el primer paso para dominar el material!`;
  }

  if (failedCards.length === 0) {
    return `### ¡Rendimiento Excepcional!
    
¡Felicidades! Has respondido todo correctamente. Demuestras un dominio completo del material. Estás más que listo para tu examen.
    
**Sugerencia:** Haz un último repaso rápido de los temas que consideres más complejos solo para refrescar la memoria. ¡Ve a por ese 10!`;
  }

  const prompt = `Un estudiante está preparándose para un examen final de historia de la gastronomía y ha fallado las siguientes preguntas en una sesión de estudio:

${failedCards.map(card => `- Pregunta: ${card.question}\n  Respuesta Correcta: ${card.answer}`).join('\n\n')}

Basado en estos errores, por favor proporciona un análisis conciso y útil en español. El análisis debe:
1. Identificar los temas o épocas principales con los que el estudiante tiene dificultades. Usa Markdown para los títulos (e.g., '### Temas a Reforzar').
2. Ofrecer 2-3 sugerencias concretas y accionables para mejorar. Usa una cabecera para las sugerencias.
3. Mantener un tono motivador y de apoyo, como un tutor personal.
4. El resultado debe ser un texto formateado con Markdown. No incluyas un encabezado principal. Empieza directamente con el análisis.`;

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
    });
    
    return response.text;

  } catch (error) {
    console.error("Error fetching analysis from Gemini:", error);
    return `Hubo un error al generar el análisis. 
    
**Sugerencia:** Por favor, revisa manualmente la lista de preguntas que fallaste. ¡A veces la tecnología falla, pero tu capacidad no! ¡Tú puedes!`;
  }
};