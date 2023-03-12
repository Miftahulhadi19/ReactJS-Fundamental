import React, { Component } from 'react';
import Greeting from './LoginUser';
import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';

class LoginControl extends Component {
  constructor(props) {
    super(props);
    this.state = { isLoggedIn: false };
    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
  }

  handleLoginClick() {
    this.setState({ isLoggedIn: true });
  }

  handleLogoutClick() {
    this.setState({ isLoggedIn: false });
  }

  render() {
    const isLoggedIn = this.state.isLoggedIn;

    let button;
    if (isLoggedIn) {
      button = <LogoutButton click={this.handleLogoutClick} />;
    } else {
      button = <LoginButton click={this.handleLoginClick} />;
    }

    return (
      <div>
        <Greeting isLoggedIn={isLoggedIn} />
        {button}
      </div>
    );
  }
}
export default LoginControl;
