import React, { Component } from 'react';
import '../App.css';

class ToyProblem2 extends Component {
  constructor() {
    super();
    this.state = {
      value: '',
      string: ''
    };
  }
  //   function disemvowel(str) {
  //     let newStr = str.match(/[b-d, f-h, j-n, p-t, v-z, ?!.]/gi);

  //    return newStr.join('');
  //  }
  handleChange(event) {
    this.setState({ value: event.target.value });
  }
  getNewString = event => {
    var newString = '';

    newString = this.state.value.match(/[b-d, f-h, j-n, p-t, v-z, ?!.]/gi);

    this.setState({
      string: newString
    });
    event.preventDefault();
  };

  render() {
    return (
      <div>
        <form onSubmit={event => this.getNewString(event)} className='VCCont'>
          <input
            type='text'
            value={this.state.value}
            onChange={event => this.handleChange(event)}
            className='VCInput'
          />
          <input type='submit' className='VCSubmit' />
        </form>
        <h3 className='MillenialString'>{this.state.string}</h3>
      </div>
    );
  }
}
export default ToyProblem2;
