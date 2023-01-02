import { Routes, Route } from 'react-router-dom';
import React from 'react';
import './App.css';
import CashForcePage from './pages/CashForcePage/CashForcePage';

function App() {
  return (
    <Routes>
      <Route path="/" element={ <CashForcePage /> } />
    </Routes>
  );
}

export default App;