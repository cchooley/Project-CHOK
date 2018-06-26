import React, { Component } from 'react';
import NavBar from './Components/NavBar';
import About from './Components/About';
import Profile from './Components/Profile'
import ProfileForm from './Components/ProfileForm';
import Footer from './Components/Footer';
import { BrowserRouter, Router, Route, Switch } from 'react-router-dom'
import './App.css';



class App extends Component {
  render() {
    return (
      <div className="App">
        
        <BrowserRouter>
        <div>
          <NavBar />
          <Switch>
            <Route exact path='/' component={About} />
            <Route exact path='/profile' component={Profile} />
            <Route exact path='/newProfile' component={ProfileForm} />
          </Switch>
          </div>
        </BrowserRouter>
        <Footer />
      </div>
    );
  }
}

export default App;
