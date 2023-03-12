import React from 'react';

function ChildComponent(props) {
  return (
    <button onClick={() => props.greetHandler('child')}>Greet Parent</button>
  );
}

export default ChildComponent;
