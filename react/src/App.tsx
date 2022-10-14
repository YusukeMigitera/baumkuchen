import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Router } from './router/Router';

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </div>
  );
};

export default App;
