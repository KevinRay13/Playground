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
    var newString = '';
    var final = '';

    newString = this.state.value.match(/[a-z, ?!.]/gi);
    for (let i = 0; i < newString.length; i++) {
      if (newString[i] === 'e') {
        final = newString.splice([i], 1, '3');

        console.log(final);
      }
    }

    this.setState({
      string: final
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
        <h3 className='VCCount'>{this.state.string}</h3>
      </div>
    );
  }
}
export default ToyProblem1;
