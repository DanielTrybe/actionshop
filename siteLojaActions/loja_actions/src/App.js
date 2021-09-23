import './App.css';
import React from 'react';
import { Route } from 'react-router-dom';
import ProdProvider from './context_API/ProdProvider';

// pages
import Index from './pages/Index';


function App() {
  return (
    <ProdProvider>
      <Route exact path="/" component={ Index } />
    </ProdProvider>
  );
}

export default App;
