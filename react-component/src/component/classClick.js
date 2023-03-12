import React, { Component } from 'react';

class ClassClick extends Component {
  clickHandler() {
    alert('You are clicked the class button');
  }
  render() {
    return (
      <div>
        <button onClick={this.clickHandler}>Click me</button>
      </div>
    );
  }
}

export default ClassClick;
