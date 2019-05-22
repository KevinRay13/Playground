import React, { Component } from 'react';
import '../App.css';

class ToyProblem1 extends Component {
  constructor() {
    super();
    this.state = {
      string: '',
      value: ''
    };
  }
  handleChange = event => {
    this.setState({ value: event.target.value });
  };
  numberfy = event => {
    var newString = this.state.value.match(/[a-z, ?!.]/gi);

    for (let i = 0; i < newString.length; i++) {
      if (newString[i] === 'e') {
        newString.splice([i], 1, '3');
      } else if (newString[i] === 'g') {
        newString.splice([i], 1, '9');
      } else if (newString[i] === 'i') {
        newString.splice([i], 1, '1');
      } else if (newString[i] === 'o') {
        newString.splice([i], 1, '0');
      }
    }

    this.setState({
      string: newString
    });
    event.preventDefault();
  };

  render() {
    return (
      <div>
        <form onSubmit={event => this.numberfy(event)} className='VCCont'>
          <input
            type='text'
            value={this.state.value}
            onChange={event => this.handleChange(event)}
            className='VCInput'
          />
          <input type='submit' className='VCSubmit' />
        </form>
        <h4 className='VCCountSmall'>{this.state.string}</h4>
      </div>
    );
  }
}
export default ToyProblem1;
