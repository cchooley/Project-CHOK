import React, { Component } from 'react';
import NavBar from './Components/NavBar';
import About from './Components/About';
import Footer from './Components/Footer';
import './App.css';

import AppForm from './Components/AppForm';


class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <About />
        <AppForm />
        <Footer />
      </div>
    );
  }
}

export default App;
