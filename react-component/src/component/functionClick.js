import React from 'react';

function FunctionClick() {
  const clickHandler = () => {
    alert('You Clicked the Function Button');
  };
  return (
    <div>
      <button onClick={clickHandler}>Click</button>
    </div>
  );
}

export default FunctionClick;
