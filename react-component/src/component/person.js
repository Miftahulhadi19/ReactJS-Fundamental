import React from 'react';

function Person({ propsPerson }) {
  return (
    <div>
      <h2>
        My name is {propsPerson.name} I {propsPerson.age} years old and I have{' '}
        {propsPerson.skill} skill
      </h2>
    </div>
  );
}

export default Person;
