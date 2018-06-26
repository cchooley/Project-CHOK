import React, { Component } from 'react';
import NavBar from './Components/NavBar';
import About from './Components/About';
import './App.css';
import SignUp from './Components/SignUp'

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <About />
        <SignUp />
      </div>
    );
  }
}

export default App;
