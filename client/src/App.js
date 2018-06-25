import React, { Component } from 'react';
import NavBar from './Components/NavBar';
import About from './Components/About';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <About />
      </div>
    );
  }
}

export default App;
