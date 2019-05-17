import React from 'react';
import ToyProblem1 from './components/ToyProblem1';
import ToyProblem2 from './components/ToyProblem2';
import ToyProblem3 from './components/ToyProblem3';

import './App.css';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <h1> Playground </h1>
        <div />
      </header>
      <body className='contentBox'>
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
          <h2>TBD</h2>
          <ToyProblem3 />
        </div>
        <div className='box'>
          {' '}
          <h2>box4</h2>
        </div>
      </body>
    </div>
  );
}

export default App;
