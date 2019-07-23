import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";

class App extends Component {
  state = {
    persons: [
      { name: "Omar", age: "37" },
      { name: "Mildred", age: "63" },
      { name: "Romulo", age: "63" }
    ]
  };

  switchNameHandler = () => {
    console.log("was clicked!");
  };

  render() {
    return (
      <div className="App">
        <h1>Hello world!</h1>
        <p>Learning react basics</p>
        <button onClick={this.switchNameHandler}>Switch name</button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
        >
          My hobbie is: Jujitsu!
        </Person>

        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
        />
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age}
        />
      </div>
    );
  }
}

export default App;
