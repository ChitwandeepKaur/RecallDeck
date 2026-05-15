import React from 'react';
import { useParams, Link } from 'react-router-dom';

export function DeckDetail() {
  const { deckId } = useParams();

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-slate-900 tracking-tight">Deck: {deckId}</h1>
        <div className="flex gap-2">
          <Link to={`/deck/${deckId}/edit`} className="btn-secondary">Edit</Link>
          <Link to={`/deck/${deckId}/study`} className="btn-primary">Study</Link>
        </div>
      </div>
      <div className="card-base p-6">
        <p className="text-slate-500">Deck details will go here.</p>
      </div>
    </div>
  );
}
