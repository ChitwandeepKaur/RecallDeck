export interface Flashcard {
  id: string;
  question: string;
  answer: string;
}

export interface DeckStats {
  timesStudied: number;
  lastStudiedAt?: string;
  correct: number;
  incorrect: number;
}

export interface Deck {
  id: string;
  title: string;
  cards: Flashcard[];
  createdAt: string;
  updatedAt: string;
  stats: DeckStats;
}
