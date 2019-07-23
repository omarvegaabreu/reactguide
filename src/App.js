import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Person from "./Person/Person";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hello world!</h1>
        <Person name="Omar" age="37">
          My hobbie is: Jujitsu!
        </Person>
        <Person name="Jose" age="87" />
        <Person name="Romulo" age="63" />
        <Person name="Mildred" age="63" />
      </div>
    );
  }
}

export default App;
