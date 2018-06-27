import React, { Component } from "react";
import { Button, Modal, Form, Menu, Segment } from "semantic-ui-react";
import { Link } from 'react-router-dom'

const loginURL = 'https://chok-database.herokuapp.com/auth/login'

export default class NavBar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loginEmail: '',
      loginPassword: ''
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
          window.location.href = '/profile'
        } else {
            alert(result.error)
        }
      })
  }

  render() {
    
    return <Segment inverted>
        <Menu className="nav-bar" inverted secondary>
          <Link to='/newProfile'><Button>Sign Up</Button></Link>
          <Modal trigger={<Button className="ui button" role="button">
                Login
              </Button>}>
            <Modal.Header>Login</Modal.Header>
            <Modal.Content image>
              <Modal.Description>
                <Form >
                  <Form.Field>
                    <label>Email</label>
                    <input  name='loginEmail' 
                            value={this.state.loginEmail} 
                            onChange={this.handleChange} 
                            placeholder="Email" />
                  </Form.Field>
                  <Form.Field>
                    <label>Password</label>
                  <input  name='loginPassword' 
                          value={this.state.loginPassword} 
                          onChange={this.handleChange}  
                          placeholder="Password" />
                  </Form.Field>
                    <Button onClick={this.handleSubmit} type="submit">Submit</Button>
                </Form>
              </Modal.Description>
            </Modal.Content>
          </Modal>
        </Menu>
        <img className="main-logo" src="./assets/bettership2.png" alt="logo" />
      </Segment>;
  }
}
