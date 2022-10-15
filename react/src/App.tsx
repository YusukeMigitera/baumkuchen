import React, { useContext, createContext, useReducer } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Router } from './router/Router';
import { PriceValueProvider } from "./components/providers/PriceValueProvider"

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <PriceValueProvider>
          <Router />
        </PriceValueProvider>
      </BrowserRouter>
    </div>
  );
};

export default App;
