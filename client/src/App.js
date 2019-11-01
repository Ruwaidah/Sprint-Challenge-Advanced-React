import React from 'react';
import logo from './logo.svg';
import './App.css';
import WorldWomen from './components/WorldWomen'
import  ModeButton from './components/ModeButton'

function App() {
  return (
    <div className="App">
            <ModeButton /> 

      <h1>World Women Cup</h1>
      <WorldWomen />

    </div>
  );
}

export default App;
