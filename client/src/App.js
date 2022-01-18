import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './styles/app.scss';
import { Navigation, Main } from './layouts'; 

function App() {
  return (
    <div className="app">
      <Router>
        <Navigation />
        <Main />
      </Router>
    </div>
  );
}

export default App;
