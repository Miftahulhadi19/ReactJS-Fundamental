import React, { Component } from 'react';

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
      comments: '',
      topics: 'react',
    };
  }
  handleUsernameChange = (e) => {
    this.setState({ username: e.target.value });
  };
  handlePasswordChange = (e) => {
    this.setState({ password: e.target.value });
  };
  handleCommentsChange = (e) => {
    this.setState({ comments: e.target.value });
  };
  handleTopicsChange = (e) => {
    this.setState({ topics: e.target.value });
  };

  addChange = (e) => {
    alert(
      `${this.state.username} ${this.state.password} ${this.state.comments} ${this.state.topics}`
    );
    e.preventDefault();
  };
  render() {
    const { username, password, comments, topics } = this.state;

    return (
      <div>
        <form onSubmit={this.addChange}>
          <div>
            <label>Username</label>
            <input
              type='text'
              value={username}
              onChange={this.handleUsernameChange}
            />
          </div>
          <div>
            <label>Password</label>
            <input
              type='password'
              value={password}
              onChange={this.handlePasswordChange}
            />
          </div>
          <div>
            <label>Comments</label>
            <textarea
              value={comments}
              onChange={this.handleCommentsChange}
            ></textarea>
          </div>
          <div>
            <label>Topics</label>
            <select value={topics} onChange={this.handleTopicsChange}>
              <option value='react'>React</option>
              <option value='node'>Node</option>
              <option value='angular'>Angular</option>
            </select>
          </div>
          <button type='submit'>Submit here</button>
        </form>
      </div>
    );
  }
}

export default Form;
