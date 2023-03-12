import React, { Component } from 'react';

class ClassComponent extends Component {
  render() {
    const { user, email, subscriber } = this.props;

    return (
      <div>
        <div>
          <h3 style={{ textAlign: 'left' }}>This Class Component</h3>
          <p style={{ textAlign: 'left' }}>User: {user}</p>
          <p style={{ textAlign: 'left' }}>Email: {email}</p>
          <p style={{ textAlign: 'left' }}>{subscriber}</p>
        </div>
      </div>
    );
  }
}

export default ClassComponent;
