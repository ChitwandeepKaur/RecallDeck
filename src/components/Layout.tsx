import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { Layers } from 'lucide-react';

export function Layout() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-white border-b border-slate-200 sticky top-0 z-10">
        <div className="max-w-5xl mx-auto px-4 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 text-primary-600 font-bold text-xl transition-opacity hover:opacity-80">
            <Layers className="w-6 h-6" />
            <span>RecallDeck</span>
          </Link>
          <nav className="flex items-center gap-4">
            <Link to="/import" className="text-slate-600 font-medium hover:text-slate-900 transition-colors">
              Import
            </Link>
          </nav>
        </div>
      </header>
      <main className="flex-1 max-w-5xl w-full mx-auto px-4 py-8">
        <Outlet />
      </main>
    </div>
  );
}
