import React, { Component } from 'react';
import NavBar from './Components/NavBar';
import About from './Components/About';
import Footer from './Components/Footer';
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <About />
        <Footer />
      </div>
    );
  }
}

export default App;
