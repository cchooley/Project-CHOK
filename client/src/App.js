import React, { Component } from 'react'
import NavBar from './Components/NavBar'
import About from './Components/About'
import Profile from './Components/Profile'
import ProfileForm from './Components/ProfileForm'
import AppForm from './Components/AppForm'
import Footer from './Components/Footer'
import InternshipList from './Components/InternshipList'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import jwtDecode from 'jwt-decode'
import './App.css'


const userURL = 'https://chok-database.herokuapp.com/students'
const internshipURL = 'https://chok-database.herokuapp.com/internships'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      userData: [],
      internshipData: [],
      userId: '',
      signedUp: false
    }
  }

  componentDidMount() {
    this.getUsers()
    this.getInternships()
  }

  updateUserID = (userId) => {
    this.setState({
      userId
    })
  }

  handleSubmit = (profileData) => {
    fetch(userURL, {
      method: "POST",
      headers: new Headers({ "content-type": "application/json" }),
      body: JSON.stringify(profileData)
    })
      .then(response => response.json())
      .then(result => {
        console.log(result);
        window.localStorage.token = result.token
        let decodedToken = jwtDecode(result.token)
        let users = this.state.userData
        users.push(result.student)
        this.updateUserID(decodedToken.userId)
        this.setState({
          userData: users,
          signedUp: !this.state.signedUp
        })
      })
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
        <div className="body">
        <BrowserRouter>
        <div>
          <NavBar data={this.state.userData}
                  updateUserID={this.updateUserID} />
          <Switch>
            <Route exact path='/' component={About} />
            <Route exact path='/newProfile' component={() => 
              <ProfileForm  handleSubmit={this.handleSubmit}
              signedUp={this.state.signedUp} />} />
            <Route exact path='/internships' component={() => 
              <InternshipList data={this.state.internshipData}
                              userId={this.state.userId} />} />
            <Route exact path='/profile' component={() => 
              <Profile  data={this.state.userData} 
                        userId={this.state.userId} />} />
            {/* <Route exact path='/apply' component={AppForm} /> */}
          </Switch>
          </div>
        </BrowserRouter>
        </div>
        <Footer />
      </div>
    )
  }
}

export default App
