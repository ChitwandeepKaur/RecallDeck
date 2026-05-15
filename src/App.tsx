import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Dashboard } from './pages/Dashboard';
import { ImportDeck } from './pages/ImportDeck';
import { DeckDetail } from './pages/DeckDetail';
import { EditDeck } from './pages/EditDeck';
import { StudyDeck } from './pages/StudyDeck';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="import" element={<ImportDeck />} />
          <Route path="deck/:deckId" element={<DeckDetail />} />
          <Route path="deck/:deckId/edit" element={<EditDeck />} />
          <Route path="deck/:deckId/study" element={<StudyDeck />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
