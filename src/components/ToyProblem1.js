import React, { Component } from 'react';

class ToyProblem1 extends Component {
  constructor() {
    super();
    this.state = {};
  }
  getCount(str) {
    var vowelsCount = 0;

    vowelsCount = str.match(/[aeiou]/g);
    console.log(vowelsCount == null ? 0 : vowelsCount.length);
    return vowelsCount == null ? 0 : vowelsCount.length;
  }

  render() {
    return (
      <div>
        <h3>Vowel Counter</h3>
        <form action=''>
          <input type='text' />
          <input
            type='submit'
            onClick={() => this.getCount(this.target.value)}
          />
        </form>
      </div>
    );
  }
}
export default ToyProblem1;
