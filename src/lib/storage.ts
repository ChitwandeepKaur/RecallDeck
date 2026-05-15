import { Deck } from '../types';

const STORAGE_KEY = 'recalldeck_data';

export function getDecks(): Deck[] {
  const data = localStorage.getItem(STORAGE_KEY);
  return data ? JSON.parse(data) : [];
}

export function saveDeck(deck: Deck): void {
  const decks = getDecks();
  decks.push(deck);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(decks));
}

export function updateDeck(updatedDeck: Deck): void {
  const decks = getDecks();
  const index = decks.findIndex((d) => d.id === updatedDeck.id);
  if (index !== -1) {
    decks[index] = updatedDeck;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(decks));
  }
}

export function deleteDeck(deckId: string): void {
  const decks = getDecks();
  const filtered = decks.filter((d) => d.id !== deckId);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(filtered));
}

export function loadSampleDeck(): Deck {
  const sampleDeck: Deck = {
    id: crypto.randomUUID(),
    title: 'Sample: Web Fundamentals',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    stats: {
      timesStudied: 0,
      correct: 0,
      incorrect: 0,
    },
    cards: [
      {
        id: crypto.randomUUID(),
        question: 'What does HTML stand for?',
        answer: 'HyperText Markup Language',
      },
      {
        id: crypto.randomUUID(),
        question: 'What is the purpose of CSS?',
        answer: 'To style and layout web pages.',
      },
      {
        id: crypto.randomUUID(),
        question: 'What is DOM?',
        answer: 'Document Object Model\nIt represents the page so that programs can change the document structure, style, and content.',
      },
    ],
  };

  saveDeck(sampleDeck);
  return sampleDeck;
}
