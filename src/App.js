import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  render() {
    return (
        <div className="App">
          <h1>Hi Guest,here is the first react app of Gökhan</h1>
          <p1>let's begin with the project</p1>
         <Person/>
        </div>
     /* default page when we create the react-app
    <div className="App">
       <header className="App-header"> 
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        
      </div>
      */
    );
  }
}

export default App;
