import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";

class App extends Component {
  state = {
    persons: [
      { name: "Omar", age: 37 },
      { name: "Romulo", age: 63 },
      { name: "Mildred", age: 63 }
    ],
    otherState: "some other value"
  };

  switchNameHandler = newName => {
    // console.log('Was clicked!');
    // DON'T DO THIS: this.state.persons[0].name = 'Maximilian';
    this.setState({
      persons: [
        {
          name: newName,
          age: 38
        },
        { name: "Romulo Vega", age: 63 },
        { name: "Mildred Vega", age: 63 }
      ]
    });
  };

  nameChangeHander = event => {
    this.setState({
      persons: [
        {
          name: "Omar",
          age: 38
        },
        { name: event.target.value, age: 63 },
        { name: "Mildred Vega", age: 63 }
      ]
    });
  };

  render() {
    const style = {
      backGroundColor: "white",
      font: "inherit",
      border: "1px solid blue",
      padding: "8px",
      cursor: "pointer"
    };

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <button
          style={style}
          onClick={() => this.switchNameHandler("OMAR VEGA ABREU")}
        >
          Switch Name
        </button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
        />
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          click={this.switchNameHandler.bind(this, "this is the new name")}
          changed={this.nameChangeHander}
        >
          My Hobbies: Racing
        </Person>
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age}
        />
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default App;
