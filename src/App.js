import React from 'react';

import './App.css';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <h1> Playground </h1>
      </header>
      <body className='contentBox'>
        <div className='box'>
          <h2>box1</h2>
        </div>
        <div className='box'>
          <h2>box2</h2>
        </div>
        <div className='box'>
          {' '}
          <h2>box3</h2>{' '}
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
