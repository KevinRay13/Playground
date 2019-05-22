import React from 'react';
import ToyProblem1 from './components/ToyProblem1';
import ToyProblem2 from './components/ToyProblem2';
import ToyProblem3 from './components/ToyProblem3';
import ToyProblem4 from './components/ToyProblem4';

import './App.css';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <h1> Playground </h1>
        <div />
      </header>
      <div className='contentBox'>
        <div className='box'>
          <h2>Vowel Counter</h2>
          <ToyProblem1 />
        </div>
        <div className='box'>
          <h2>Millenial Bot</h2>
          <ToyProblem2 />
        </div>
        <div className='box'>
          {' '}
          <h2>Numberfy</h2>
          <ToyProblem3 />
        </div>
        <div className='box'>
          {' '}
          <h2>Custom Buttons</h2>
          <ToyProblem4 />
        </div>
      </div>
    </div>
  );
}

export default App;
