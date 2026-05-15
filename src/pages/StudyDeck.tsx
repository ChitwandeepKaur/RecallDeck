import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { X } from 'lucide-react';

export function StudyDeck() {
  const { deckId } = useParams();

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-bold text-slate-500">Studying Deck: {deckId}</h1>
        <Link to={`/deck/${deckId}`} className="text-slate-400 hover:text-slate-600 transition-colors">
          <X className="w-6 h-6" />
        </Link>
      </div>
      <div className="card-base aspect-[3/2] flex items-center justify-center p-8 bg-white cursor-pointer hover:shadow-lg transition-shadow">
        <p className="text-2xl font-medium text-slate-800 text-center">Study mode will go here.</p>
      </div>
    </div>
  );
}
