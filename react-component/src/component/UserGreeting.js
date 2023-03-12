import React, { Component } from 'react';

class UserGreeting extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggetin: false,
    };
  }

  render() {
    // short circuit operators
    // return this.state.isLoggetin && <div>Wellcome Miftahul Hadi</div>;

    // condisi ternary operator 2
    // return this.state.isLoggetin ? (
    //   <div>Wellcome Miftahul </div>
    // ) : (
    //   <div>Wellcome Hadi</div>
    // );
    // sondisi ternary operator 1
    // return (
    //   <div>{this.state.isLoggetin ? 'Wellcome Miftahul' : 'Wellcome Hadi'}</div>
    // );
    // element variables
    // let message;
    // if (this.state.isLoggetin) {
    //   message = <div>Wellcome Miftahul</div>;
    // } else {
    //   message = <div>Wellcome Hadi</div>;
    // }
    // return <div>{message}</div>;
    // default
    if (this.state.isLoggetin) {
      return <div>Wellcome Miftahul</div>;
    } else {
      return <div>Wellcome Hadi</div>;
    }
  }
}

export default UserGreeting;
