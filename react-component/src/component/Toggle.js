import React, { Component } from 'react';

class Toggle extends Component {
  constructor() {
    super();

    this.state = {
      isToggleOn: true,
    };
  }
  handleToggleChange = () => {
    this.setState((prevState) => ({
      isToggleOn: !prevState.isToggleOn,
    }));
    console.log(this.state.isToggleOn);
  };
  render() {
    return (
      <div>
        <button onClick={this.handleToggleChange}>
          {this.state.isToggleOn ? 'ON' : 'OFF'}
        </button>
      </div>
    );
  }
}

export default Toggle;
