import React from 'react';
import { Link } from 'react-router-dom';
import { Plus } from 'lucide-react';

export function Dashboard() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-slate-900 tracking-tight">Your Decks</h1>
        <Link to="/import" className="btn-primary flex items-center gap-2">
          <Plus className="w-5 h-5" />
          <span>Import Deck</span>
        </Link>
      </div>
      
      <div className="bg-white p-12 rounded-2xl border border-slate-200 text-center shadow-sm">
        <p className="text-slate-500 mb-4">No decks yet. Start by importing your first deck!</p>
        <Link to="/import" className="btn-primary inline-flex">
          Create Deck
        </Link>
      </div>
    </div>
  );
}
