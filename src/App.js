import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  state = {
    persons: [
      { name: 'Divya', age: 26 },
      { name: 'Ivy', age: 24 },
      { name: 'Divi', age: 25}
    ]
  }

  switchNameHandler = (newName) => {
    this.setState({
      persons: [
        { name: newName, age: 27 },
        { name: 'Ivy', age: 24 },
        { name: 'Divi', age: 16}
      ]
    })
  }

  nameChangedHandler = (event) =>{
    this.setState({
      persons: [
        { name: 'Divya', age: 27 },
        { name: event.target.value, age: 24 },
        { name: 'Divi', age: 16}
      ]
    })
  }

  render() {
    const style ={
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px'
    };

    return (
      <div className="App">
      <h1>Hi React, I'm back</h1>
      <button 
        style = {style}
        onClick = {() => this.switchNameHandler('Divyaaaa!!!')}>Switch Name!</button>
        <Person 
        name = {this.state.persons[0].name} 
        age = {this.state.persons[0].age}/>
        <Person 
        name = {this.state.persons[1].name} 
        age = {this.state.persons[1].age}
        click = {this.switchNameHandler.bind(this,'Divvvv!')}
        changed = {this.nameChangedHandler}> My hobbies : Sleeping</Person>
        <Person 
        name = {this.state.persons[2].name} 
        age = {this.state.persons[2].age}/>
      </div>
    );
  }
}

export default App;
