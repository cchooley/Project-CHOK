import React, { Component } from 'react'
import { Form, Segment } from 'semantic-ui-react'
import { Link, Redirect } from 'react-router-dom'

class ProfileForm extends Component {
  state = {
    name: '',
    picture: '',
    school: '',
    email: '',
    password: '',
    hours: 0,
  }

  handleChange = (event) => {
    const value = event.target.value
    const key = event.target.name
    this.setState({
      [key]: value
    })
  }

  captureData = (event) => {
    event.preventDefault()
      const profileData = {
        name: this.state.name,
        picture: this.state.picture,
        school: this.state.school,
        email: this.state.email,
        password: this.state.password,
        hours: this.state.hours,
        internship_id: 1
      }
      this.props.handleSubmit(profileData)
  }

  render() {
    if(this.props.signedUp) {
      return <Redirect to='/profile' />
    }
    return (
      <Segment>
      <Form>
        <Form.Input name='name' 
                    onChange={this.handleChange} 
                    fluid label='First and last name' 
                    placeholder='First and last name'
                    value={this.state.name} />  
        <Form.Input name='picture' 
                    onChange={this.handleChange} 
                    fluid label='Profile photo link' 
                    placeholder='Profile photo link'
                    value={this.state.picture} />
        <Form.Input name='school' 
                    onChange={this.handleChange} 
                    fluid label='School name' 
                    placeholder='School name'
                    value={this.state.school} />
        <Form.Input name='email' 
                    onChange={this.handleChange} 
                    fluid label='Email' 
                    placeholder='Email'
                    value={this.state.email} />
        <Form.Input name='password' 
                    onChange={this.handleChange} 
                    fluid label='Password' 
                    placeholder='Password'
                    value={this.state.password} />
        <Form.Button onClick={this.captureData} >Submit</Form.Button>
      </Form>
      </Segment>
    )
  }
}

export default ProfileForm
