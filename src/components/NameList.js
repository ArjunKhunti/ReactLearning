import React from "react";
import Person from "./Person";

function NameList() {
  const names = ["Alpha", "Bravo", "Charlie", "Alpha"];
  const person = [
    {
      id: 1,
      name: "Alpha",
      age: 28,
      skill: "Angular"
    },
    {
      id: 2,
      name: "Bravo",
      age: 30,
      skill: "React"
    },
    {
      id: 3,
      name: "Charlie",
      age: 25,
      skill: "Vue"
    }
  ]
  //   const personList = person.map(person => (
  //     <Person key={person.id} person={person} />
  //   ));

  const nameList = names.map((name, index) => (
    <h2 key={index}>
      {index} {name}
    </h2>
  ))
  return <div>{nameList}</div>
}

export default NameList;
