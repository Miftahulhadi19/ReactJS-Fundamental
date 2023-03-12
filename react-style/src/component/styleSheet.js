import React from 'react';
import './myStyle.css';

function Stylesheet(props) {
  const ClassName = props.style ? 'primary' : '';
  return <div className={`${ClassName} font-xl`}>Stylesheet</div>;
}

export default Stylesheet;
