import React, { Component } from 'react';

class Message extends Component {
  constructor() {
    super();
    this.state = {
      message: 'Wellcome Visitor',
    };
  }
  changeMessage() {
    this.setState({
      message: 'Thanks for subscribing',
    });
  }
  render() {
    const subscrib = 'subscribe';
    return (
      <div>
        <h1>{this.state.message}</h1>
        <button onClick={() => this.changeMessage()}>{subscrib}</button>
      </div>
    );
  }
}

export default Message;
