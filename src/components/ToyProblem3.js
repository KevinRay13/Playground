import React, { Component } from 'react';
import '../App.css';

class ToyProblem1 extends Component {
  constructor() {
    super();
    this.state = {};
  }
  handleChange(event) {
    this.setState({ value: event.target.value });
  }
  getCount = event => {
    this.setState({});
    event.preventDefault();
  };

  render() {
    return (
      <div>
        <form onSubmit={event => this.getCount(event)} className='VCCont'>
          <input
            type='text'
            value={this.state.value}
            onChange={event => this.handleChange(event)}
            className='VCInput'
          />
          <input type='submit' className='VCSubmit' />
        </form>
        <h3 className='VCCount'>{this.state.count}</h3>
      </div>
    );
  }
}
export default ToyProblem1;
