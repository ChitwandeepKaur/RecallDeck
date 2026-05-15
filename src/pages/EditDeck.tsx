import React from 'react';
import { useParams, Link } from 'react-router-dom';

export function EditDeck() {
  const { deckId } = useParams();

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-slate-900 tracking-tight">Edit Deck</h1>
        <Link to={`/deck/${deckId}`} className="text-primary-600 font-medium hover:underline">Done Editing</Link>
      </div>
      <div className="card-base p-6">
        <p className="text-slate-500">Edit form will go here.</p>
      </div>
    </div>
  );
}
