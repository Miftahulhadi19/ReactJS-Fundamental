import React from 'react';
import Person from './person';

function NameList() {
  const persons = [
    {
      id: 1,
      name: 'John',
      age: 21,
      skill: 'HTML',
    },
    {
      id: 2,
      name: 'Doe',
      age: 33,
      skill: 'CSS',
    },
    {
      id: 3,
      name: 'Diana',
      age: 25,
      skill: 'JS',
    },
  ];
  const personList = persons.map((personal) => (
    <Person key={personal.name} propsPerson={personal} />
  ));
  // const names = ['Aufa', 'Baladika', 'Makarim'];
  // const nameList = names.map((name) => <h3>{name}</h3>);
  // return <div>{nameList}</div>;
  return <div>{personList}</div>;
}

export default NameList;
