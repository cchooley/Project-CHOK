import React, { Component } from 'react';
import NavBar from './Components/NavBar';
import About from './Components/About';
import Profile from './Components/Profile'
import ProfileForm from './Components/ProfileForm';
import AppForm from './Components/AppForm';
import Footer from './Components/Footer';
import { BrowserRouter, Router, Route, Switch } from 'react-router-dom'
import './App.css';

const userURL = 'https://chok-database.herokuapp.com/students'
const internshipURL = 'https://chok-database.herokuapp.com/internships'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      userData: [],
      internshipData: []
    }
  }

  componentDidMount() {
    this.getUsers()
    this.getInternships()
  }

  getUsers = () => {
    fetch(userURL)
    .then(response => response.json())
    .then(data => {
      console.log('users:', data)
        this.setState({
          userData: data.students
        })
      })
    }

  getInternships = () => {
    fetch(internshipURL)
    .then(response => response.json())
    .then(data => {
      console.log('internships:', data)
      this.setState({
        internshipData: data.internships
      })
    })
  }
  
  render() {
    return (
      <div className="App">
        <BrowserRouter>
        <div>
          <NavBar data={this.state.userData} />
          <Switch>
            <Route exact path='/' component={About} />
            <Route exact path='/profile' component={() => <Profile data={this.state.userData} />} />
            <Route exact path='/newProfile' component={ProfileForm} />
            <Route exact path='/apply' component={AppForm} />
          </Switch>
          </div>
        </BrowserRouter>
        <Footer />
      </div>
    );
  }
}

export default App;
