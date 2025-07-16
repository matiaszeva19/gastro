
import type { Flashcard, Level } from '../types';

const ALL_FLASHCARDS: Flashcard[] = [
  // Level 1: Ancient Civilizations
  { id: 1, question: "¿Cuáles eran los dos alimentos básicos fundamentales en la dieta del Antiguo Egipto?", options: ["Trigo y uvas", "El pan y la cerveza.", "Dátiles y pescado", "Leche y miel"], answer: "El pan y la cerveza.", topic: "Antiguo Egipto" },
  { id: 2, question: "En el Antiguo Egipto, ¿para qué clase social era principalmente la carne de res?", options: ["Para los sacerdotes", "Para toda la población", "Para personas de alto estatus, principalmente durante festivales.", "Para los esclavos"], answer: "Para personas de alto estatus, principalmente durante festivales.", topic: "Antiguo Egipto" },
  { id: 3, question: "¿Qué importante código de leyes de Mesopotamia regulaba los establecimientos de bebidas?", options: ["Las Doce Tablas", "El Código de Hammurabi.", "El Código de Ur-Nammu", "Las Leyes de Eshnunna"], answer: "El Código de Hammurabi.", topic: "Mesopotamia" },
  { id: 4, question: "Según el texto, ¿qué civilización fue pionera en la elaboración de pan y conocida por el foie gras?", options: ["La civilización romana", "La civilización mesopotámica", "La civilización griega", "La civilización egipcia."], answer: "La civilización egipcia.", topic: "Civilizaciones Antiguas" },
  { id: 5, question: "¿Qué dos descubrimientos de la prehistoria fueron cruciales para el sabor y la conservación de alimentos?", options: ["La agricultura y la cerámica", "El descubrimiento del fuego y la sal.", "La rueda y el arado", "La fermentación y el secado"], answer: "El descubrimiento del fuego y la sal.", topic: "Prehistoria" },
  { id: 29, question: "Según el texto, se postula que una actividad humana precedió a la palabra y fue la condición para su surgimiento. ¿Cuál fue?", options: ["La caza", "La agricultura", "La cocina.", "La pintura rupestre"], answer: "La cocina.", topic: "Origen de la Cocina" },
  { id: 30, question: "La cocina transformó al homínido de un ser dependiente de alimentos preformados a uno que podía prepararlos, haciéndolo un animal...", options: ["Omnívoro", "Social", "Inteligente", "Autótrofo."], answer: "Autótrofo.", topic: "Origen de la Cocina" },

  // Level 2: Greece, Rome, & China
  { id: 6, question: "¿A qué civilización se le atribuye la invención de los banquetes públicos y el vino?", options: ["A Grecia", "A Egipto", "A Persia.", "A Roma"], answer: "A Persia.", topic: "Civilizaciones Antiguas" },
  { id: 7, question: "Menciona una contribución culinaria importante de la antigua China.", options: ["El aceite de oliva", "El yogur", "El té, la pasta de fideos, o los palillos.", "El pan con levadura"], answer: "El té, la pasta de fideos, o los palillos.", topic: "China Antigua" },
  { id: 8, question: "¿Qué término se originó en la Antigua Grecia para una comida con vino y conversación?", options: ["Banquete", "Ágape", "Bacanal", "Simposio."], answer: "Simposio.", topic: "Grecia y Roma" },
  { id: 9, question: "¿Qué dos elementos introdujeron los romanos en la mesa que denotaban refinamiento?", options: ["Las cucharas y los cuencos", "El mantel y un mayor uso de la vajilla.", "Las especias y las hierbas", "Los postres y los aperitivos"], answer: "El mantel y un mayor uso de la vajilla.", topic: "Grecia y Roma" },
  { id: 11, question: "Durante la Dinastía Tang en China, ¿qué utensilio se estandarizó y se convirtió en un símbolo de etiqueta?", options: ["El cuchillo", "La cuchara de porcelana", "Los palillos.", "El tenedor"], answer: "Los palillos.", topic: "China Antigua" },
  { id: 12, question: "La filosofía culinaria 'busi' (malo para comer fuera de temporada) surgió en China durante qué dinastía?", options: ["La Dinastía Han", "La Dinastía Tang", "La Dinastía Song.", "La Dinastía Ming"], answer: "La Dinastía Song.", topic: "China Antigua" },
  { id: 13, question: "La introducción de dietas carnívoras y productos lácteos fermentados en China es un legado de qué invasiones?", options: ["Las invasiones japonesas", "Las invasiones mongolas (tártaros).", "Las invasiones manchúes", "Las invasiones coreanas"], answer: "Las invasiones mongolas (tártaros).", topic: "China Antigua" },
  
  // Level 3: Middle Ages & Renaissance
  { id: 10, question: "En la comida medieval, ¿cuál era la base del sustento para la gente común?", options: ["Carne de caza y frutas", "Pescado y vino", "Combinaciones de cereales y legumbres, como trigo y garbanzos.", "Productos lácteos y pan blanco"], answer: "Combinaciones de cereales y legumbres, como trigo y garbanzos.", topic: "Edad Media" },
  { id: 14, question: "¿Qué ciudades italianas fueron el epicentro del Renacimiento culinario?", options: ["Roma, Milán y Nápoles", "Venecia, Génova y Florencia.", "Pisa, Siena y Bolonia", "Turín, Palermo y Verona"], answer: "Venecia, Génova y Florencia.", topic: "Renacimiento" },
  { id: 15, question: "¿Qué reina, criada en Venecia, llevó la importancia culinaria italiana a la corte francesa?", options: ["Isabel I de Inglaterra", "María Antonieta", "Catalina de Médici.", "Lucrecia Borgia"], answer: "Catalina de Médici.", topic: "Renacimiento" },
  { id: 16, question: "¿Qué chef notable del Renacimiento veía la cocina como un laboratorio y inventó técnicas como el baño maría?", options: ["François Vatel", "Guillaume Tirel (Taillevent)", "Bartolomeo Scappi.", "Martino da Como"], answer: "Bartolomeo Scappi.", topic: "Renacimiento" },
  
  // Level 4: Modern Era & Gastronomic Evolution
  { id: 17, question: "¿Bajo qué rey francés la gastronomía se elevó a una forma de arte, sentando las bases de la cocina clásica francesa?", options: ["Luis XIII", "Napoleón Bonaparte", "El rey Luis XIV.", "Carlos X"], answer: "El rey Luis XIV.", topic: "Edad Moderna" },
  { id: 18, question: "Marie-Antoine Carême, conocido como 'el rey de los chefs', es famoso por desarrollar y clasificar sistemáticamente ¿qué cosa?", options: ["Los postres", "Las sopas", "Los métodos de cocción", "Las salsas."], answer: "Las salsas.", topic: "Edad Moderna" },
  { id: 19, question: "La llegada de la electricidad y la refrigeración fue un punto de inflexión que impulsó ¿qué movimiento culinario?", options: ["La Cocina Clásica", "La Nouvelle Cuisine.", "La Cocina de Fusión", "La Gastronomía Molecular"], answer: "La Nouvelle Cuisine.", topic: "Evolución Gastronómica" },
  { id: 20, question: "¿Quiénes son los chefs clave asociados con la Cocina de Vanguardia mencionados en el texto?", options: ["Paul Bocuse y Auguste Escoffier", "Joël Robuchon y Alain Ducasse", "Ferran Adrià, Albert Adrià, y Heston Blumenthal.", "Gordon Ramsay y Marco Pierre White"], answer: "Ferran Adrià, Albert Adrià, y Heston Blumenthal.", topic: "Evolución Gastronómica" },
  { id: 21, question: "La Cocina de Vanguardia abrazó un campo científico para mejorar sabores y experiencias, conocido como...", options: ["Química alimentaria", "Física culinaria", "Gastronomía molecular.", "Biotecnología"], answer: "Gastronomía molecular.", topic: "Evolución Gastronómica" },
  
  // Level 5: Applied Gastronomy & Regional Cuisines
  { id: 22, question: "En la 'edad dorada de la aviación', ¿qué tipo de comidas se servían a bordo, comparables a restaurantes de clase mundial?", options: ["Sandwiches y snacks", "Comidas pre-envasadas", "Comidas gourmet como langosta Thermidor y filet mignon.", "Buffet libre"], answer: "Comidas gourmet como langosta Thermidor y filet mignon.", topic: "Edad Dorada de la Aviación" },
  { id: 23, question: "Para preparar café en el espacio, los astronautas usan un PWD. ¿De dónde se obtiene el agua?", options: ["De tanques de agua de la Tierra", "Es agua reciclada, purificada de la orina.", "De la humedad del aire", "De reacciones químicas a bordo"], answer: "Es agua reciclada, purificada de la orina.", topic: "Cocina Espacial" },
  { id: 24, question: "¿Por qué la sal se usa en forma líquida en el espacio?", options: ["Para que se disuelva más rápido", "Porque la sal sólida sería difícil de usar en microgravedad.", "Porque tiene mejor sabor", "Para ahorrar espacio de almacenamiento"], answer: "Porque la sal sólida sería difícil de usar en microgravedad.", topic: "Cocina Espacial" },
  { id: 25, question: "Inicialmente, los gauchos en Argentina cazaban ganado salvaje y consumían principalmente una parte del animal. ¿Cuál?", options: ["El corazón", "El lomo", "Solo la lengua.", "Las costillas"], answer: "Solo la lengua.", topic: "Argentina" },
  { id: 26, question: "El 'asado a la estaca' es un método de cocción tradicional gaucho que utiliza solo leña. ¿Qué no se usa?", options: ["Sal y pimienta", "No se usa carbón ni salsas.", "Aceite", "Chimichurri"], answer: "No se usa carbón ni salsas.", topic: "Argentina" },
  { id: 27, question: "¿Qué eran las 'pulperías' en la vida social del gaucho?", options: ["Escuelas rurales", "Puestos de avanzada militar", "Iglesias", "Eran tiendas/tabernas rurales que servían como puntos de encuentro social."], answer: "Eran tiendas/tabernas rurales que servían como puntos de encuentro social.", topic: "Argentina" },
  { id: 28, question: "¿Cuál es la bebida tradicional sudamericana que forma una parte significativa de la cultura gaucha?", options: ["El café", "La chicha", "El pisco", "El mate."], answer: "El mate.", topic: "Argentina" }
];


const shuffleArray = <T,>(array: T[]): T[] => {
    return [...array].sort(() => Math.random() - 0.5);
};

const level1Cards = ALL_FLASHCARDS.filter(c => ["Antiguo Egipto", "Mesopotamia", "Prehistoria", "Origen de la Cocina", "Civilizaciones Antiguas"].includes(c.topic) && c.id !== 6);
const level2Cards = ALL_FLASHCARDS.filter(c => ["Grecia y Roma", "China Antigua", "Civilizaciones Antiguas"].includes(c.topic) && c.id === 6);
const level3Cards = ALL_FLASHCARDS.filter(c => ["Edad Media", "Renacimiento"].includes(c.topic));
const level4Cards = ALL_FLASHCARDS.filter(c => ["Edad Moderna", "Evolución Gastronómica"].includes(c.topic));
const level5Cards = ALL_FLASHCARDS.filter(c => ["Edad Dorada de la Aviación", "Cocina Espacial", "Argentina"].includes(c.topic));

export const LEVELS: Level[] = [
    { name: "Nivel 1: Civilizaciones Antiguas", cards: shuffleArray(level1Cards), passingScore: 50 },
    { name: "Nivel 2: Grecia, Roma y China", cards: shuffleArray(level2Cards), passingScore: 60 },
    { name: "Nivel 3: Edad Media y Renacimiento", cards: shuffleArray(level3Cards), passingScore: 70 },
    { name: "Nivel 4: Era Moderna y Evolución", cards: shuffleArray(level4Cards), passingScore: 80 },
    { name: "Nivel 5: Cocina Aplicada y Regional", cards: shuffleArray(level5Cards), passingScore: 85 },
    { name: "Repaso Final: ¡A por el 10!", cards: shuffleArray(ALL_FLASHCARDS), passingScore: 90 },
];
