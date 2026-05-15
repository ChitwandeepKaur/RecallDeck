import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Plus, BookOpen, Clock, Layers } from 'lucide-react';
import { getDecks, loadSampleDeck } from '../lib/storage';
import { Deck } from '../types';

export function Dashboard() {
  const [decks, setDecks] = useState<Deck[]>([]);

  useEffect(() => {
    setDecks(getDecks());
  }, []);

  const handleLoadSample = () => {
    const sample = loadSampleDeck();
    setDecks([...decks, sample]);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-slate-900 tracking-tight">Your Decks</h1>
        <Link to="/import" className="btn-primary flex items-center gap-2">
          <Plus className="w-5 h-5" />
          <span>Import Deck</span>
        </Link>
      </div>
      
      {decks.length === 0 ? (
        <div className="bg-white p-12 rounded-2xl border border-slate-200 text-center shadow-sm">
          <Layers className="w-12 h-12 text-slate-300 mx-auto mb-4" />
          <h2 className="text-xl font-semibold text-slate-700 mb-2">No decks yet</h2>
          <p className="text-slate-500 mb-6">Start by importing your first deck or load a sample to see how it works!</p>
          <div className="flex justify-center gap-4">
            <button onClick={handleLoadSample} className="btn-secondary">
              Load Sample Deck
            </button>
            <Link to="/import" className="btn-primary">
              Create Deck
            </Link>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {decks.map((deck) => (
            <div key={deck.id} className="card-base p-6 flex flex-col h-full">
              <h3 className="text-xl font-bold text-slate-800 mb-4 line-clamp-2">{deck.title}</h3>
              
              <div className="space-y-3 mb-6 flex-1">
                <div className="flex items-center gap-2 text-slate-600">
                  <BookOpen className="w-4 h-4" />
                  <span className="text-sm font-medium">{deck.cards.length} cards</span>
                </div>
                <div className="flex items-center gap-2 text-slate-600">
                  <Clock className="w-4 h-4" />
                  <span className="text-sm">
                    {deck.stats.lastStudiedAt 
                      ? `Last studied: ${new Date(deck.stats.lastStudiedAt).toLocaleDateString()}`
                      : 'Never studied'}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-2 mt-auto pt-4 border-t border-slate-100">
                <Link to={`/deck/${deck.id}/study`} className="btn-primary flex-1 text-center py-2">
                  Study
                </Link>
                <Link to={`/deck/${deck.id}`} className="btn-secondary py-2 px-3">
                  View
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

