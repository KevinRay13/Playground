import React, { Component } from 'react';
import '../App.css';

class ToyProblem2 extends Component {
  constructor() {
    super();
    this.state = {
      value: ''
    };
  }
  //   function disemvowel(str) {
  //     let newStr = str.match(/[b-d, f-h, j-n, p-t, v-z, ?!.]/gi);

  //    return newStr.join('');
  //  }
  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  render() {
    return (
      <div>
        <form onSubmit='' className='VCCont'>
          <input
            type='text'
            value={this.state.value}
            onChange={event => this.handleChange(event)}
            className='VCInput'
          />
          <input type='submit' className='VCSubmit' />
        </form>
        <h3 className='VCCount' />
      </div>
    );
  }
}
export default ToyProblem2;
