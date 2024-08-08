import React from 'react';
import { Routes, Route } from 'react-router-dom';
import AuthView from './views/AuthView';
import DocumentView from './views/DocumentView';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Routes>
        <Route path="/" element={<AuthView />} />
        <Route path="/document-upload" element={<DocumentView />} />
      </Routes>
    </div>
  );
};

export default App;
