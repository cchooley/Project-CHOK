import React, { Component } from 'react'
import NavBar from './Components/NavBar'
import About from './Components/About'
import Profile from './Components/Profile'
import ProfileForm from './Components/ProfileForm'
import AppForm from './Components/AppForm'
import Footer from './Components/Footer'
import InternshipList from './Components/InternshipList'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import './App.css'

const userURL = 'https://chok-database.herokuapp.com/students'
const internshipURL = 'https://chok-database.herokuapp.com/internships'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      userData: [],
      internshipData: [],
      name: '',
      picture: '',
      school: '',
      email: '',
      password: '',
      interest: '',
      hours: 0,
      userId: '',
      signedUp: false,
      loggedIn: false
    }
  }

  componentDidMount() {
    this.getUsers()
    this.getInternships()
  }

  handleChange = (event) => {
    const value = event.target.value
    const key = event.target.name
    this.setState({
      [key]: value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    fetch(userURL, {
      method: "POST",
      headers: new Headers({ "content-type": "application/json" }),
      body: JSON.stringify({
        name: this.state.name,
        picture: this.state.picture,
        school: this.state.school,
        email: this.state.email,
        password: this.state.password,
        interests: this.state.interest,
        hours: this.state.hours
      })
    })
      .then(response => response.json())
      .then(response => {
        this.setState({
          userID: response.student.id,
          signedUp: !this.state.signedUp
        })
      })
      .then(this.getUsers)
  }

  getUsers = () => {
    fetch(userURL)
    .then(response => response.json())
    .then(data => {
        this.setState({
          userData: data.students
        })
      })
    }

  getInternships = () => {
    fetch(internshipURL)
    .then(response => response.json())
    .then(data => {
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
            <Route exact path='/newProfile' component={() => 
              <ProfileForm  handleChange={this.handleChange} 
                            handleSubmit={this.handleSubmit}
                            name={this.state.name}
                            picture={this.state.picture}
                            school={this.state.school}
                            email={this.state.email}
                            password={this.state.password}
                            interest={this.state.interest}
                            signedUp={this.state.signedUp}  />} />
            <Route exact path='/internships' component={() => 
              <InternshipList data={this.state.internshipData} />} />
            <Route exact path='/profile' component={() => 
              <Profile  data={this.state.userData} 
                        userId={this.state.userId} />} />
            <Route exact path='/apply' component={AppForm} />
          </Switch>
          </div>
        </BrowserRouter>
        <Footer />
      </div>
    )
  }
}

export default App
