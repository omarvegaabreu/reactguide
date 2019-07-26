import React, { useState } from "react";
import "./App.css";
import Person from "./Person/Person";

const app = props => {
  //to use hooks and using destructuring

  const [personsState, setPersonsState] = useState({
    persons: [
      { name: "Omar", age: "37" },
      { name: "Mildred", age: "63" },
      { name: "Romulo", age: "63" }
    ],
    otherState: "Some other value"
  });
  const switchNameHandler = () => {
    // console.log("was clicked!");
    setPersonsState({
      persons: [
        { name: "Omar Vega", age: "37" },
        { name: "Mildred Vega", age: "63" },
        { name: "Romulo Vega", age: "63" }
      ]
    });
  };

  return (
    <div className="App">
      <h1>Hello world!</h1>
      <p>Learning react basics</p>
      <button onClick={switchNameHandler}>Switch name</button>
      <Person
        name={personsState.persons[0].name}
        age={personsState.persons[0].age}
      >
        My hobbie is: Jujitsu!
      </Person>

      <Person
        name={personsState.persons[1].name}
        age={personsState.persons[1].age}
      />
      <Person
        name={personsState.persons[2].name}
        age={personsState.persons[2].age}
      />
    </div>
  );
};

export default app;
