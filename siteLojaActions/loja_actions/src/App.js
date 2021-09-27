import './App.css';
import React from 'react';
import { Route } from 'react-router-dom';
import ProdProvider from './context_API/ProdProvider';

// pages
import Index from './pages/Index';
import Details from './pages/Details';


function App() {
  return (
    <ProdProvider>
      <Route exact path="/" component={ Index } />
      <Route exact path="/detail/:id" render={ (props) => <Details { ...props } /> } />
    </ProdProvider>
  );
}

export default App;
