
export interface Flashcard {
  id: number;
  question: string;
  options: string[];
  answer: string;
  topic: string;
}

export enum GameState {
  Start,
  Studying,
  LevelComplete,
  Finished
}

export interface Level {
  name: string;
  cards: Flashcard[];
  passingScore: number;
}

export interface StudyHistory {
  cardId: number;
  correct: number;
  incorrect: number;
}
