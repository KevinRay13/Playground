import React, { Component } from 'react';
import '../App.css';

class ToyProblem4 extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className='buttonContainer'>
        <button className='lightBtn'>Light</button>
        <button className='darkBtn'>Dark</button>
        <button className='callBtn'>Call Attention</button>
        <button>TBD</button>
      </div>
    );
  }
}
export default ToyProblem4;
