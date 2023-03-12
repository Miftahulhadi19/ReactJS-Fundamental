import React from 'react';
import { useState } from 'react';

const FunctionComponent = (props) => {
  const { user, email } = props;
  const name = 'Miftahul Hadi';

  const [Counter, setCounter] = useState(0);

  const PlusCounter = () => {
    const nextCounter = Counter + 1;
    setCounter(nextCounter);
  };

  const MinCounter = () => {
    const prevCounter = Counter - 1;
    setCounter(prevCounter);
  };
  return (
    <div>
      <div>
        <button onClick={MinCounter}>-</button>
        <h3>Count :{Counter}</h3>
        <button onClick={PlusCounter}>+</button>
      </div>
      <div>
        <p style={{ marginBottom: '-20px' }}>Hallo {name}!</p>
        <h3>This is Functional Component</h3>
        <p style={{ textAlign: 'left' }}>User: {user}</p>
        <p style={{ textAlign: 'left' }}>Email: {email}</p>
        <p style={{ textAlign: 'left' }}>{props.subscriber}</p>
      </div>
    </div>
  );
};

export default FunctionComponent;
