import Profile from './Profile'
import React, { Component } from "react"
import { Button, Menu, Segment } from "semantic-ui-react"
import Login from './Login';
import { Link, Redirect, Route } from 'react-router-dom'
import jwtDecode from 'jwt-decode'

const loginURL = 'https://chok-database.herokuapp.com/auth/login'

export default class NavBar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loginEmail: '',
      loginPassword: '',
      loggedIn: false
    }
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
    const body = JSON.stringify({
      email: this.state.loginEmail,
      password: this.state.loginPassword
    })
    fetch(loginURL, {
      method: "POST",
      headers: new Headers ({"content-type": "application/json"}),
      body: body
    })
    .then(response => response.json())
    .then(result =>	{
      if(result.token) {
        window.localStorage.token = result.token
        let decodedToken = jwtDecode(result.token)
        this.props.updateUserID(decodedToken.userId)
        this.setState({
          loggedIn: !this.state.loggedIn
        })
        window.location.href = '/profile' 
      } else {
          alert(result.error)
      }
    })
  }

  logOut = () => {
    delete window.localStorage.token
    window.location.href = '/'
  }

  render() {
    // if(this.state.loggedIn) {
    //   return <Redirect to='/profile'/>
    // }

    const token = window.localStorage.token

    return ( 
            <Segment inverted>
              <Menu className="nav-bar" inverted secondary>
                {!token ? (
                  <div>
                    <Link to='/newProfile'><Button>Sign Up</Button></Link>
                      <Login  loginEmail={this.state.loginEmail}
                              loginPassword={this.state.loginPassword}
                              handleChange={this.handleChange}
                              handleSubmit={this.handleSubmit} />
                  </div>
                ) : ( 
                  <div>
                    <Link to='/'><Button onClick={this.logOut}>Logout</Button></Link> 
                  </div>
                )} 
              </Menu>
              <img className="main-logo" src="./assets/bettership2.png" alt="logo" />
            </Segment>
    )
  }
}
