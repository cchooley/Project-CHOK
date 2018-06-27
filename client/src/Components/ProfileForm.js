import React, { Component } from 'react'
import { Form, Segment } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

const userURL = 'https://chok-database.herokuapp.com/students'

class ProfileForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      picture: '',
      school: '',
      email: '',
      password: '',
      interest: '',
      hours: 0
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
    	fetch(userURL, {
        method: "POST",
        headers: new Headers ({"content-type": "application/json"}),
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
      .then(response =>	{
        window.location.href = '/profile'
        console.log(response)
      })
  }

  render() {
    const { value } = this.state
    return (
      <Segment>
      <Form>
        <Form.Input name='name' onChange={this.handleChange} fluid label='First and last name' placeholder='First and last name' />  
        <Form.Input name='picture' onChange={this.handleChange} fluid label='Profile photo link' placeholder='Profile photo link' />
        <Form.Input name='school' onChange={this.handleChange} fluid label='School name' placeholder='School name' />
        <Form.Input name='email' onChange={this.handleChange} fluid label='Email' placeholder='Email' />
        <Form.Input name='password' onChange={this.handleChange} fluid label='Password' placeholder='Password' />
        <Form.Group  grouped>
          <label>Interest</label>
          <Form.Field name='interest' onChange={this.handleChange} label='Art' control='input' type='radio' value='art'/>
            <Form.Field name='interest' onChange={this.handleChange} label='Music' control='input' type='radio' value='music' />
            <Form.Field name='interest' onChange={this.handleChange} label='Theater' control='input' type='radio' value='theater' />
            <Form.Field name='interest' onChange={this.handleChange} label='Finance' control='input' type='radio' value='finance' />
            <Form.Field name='interest' onChange={this.handleChange} label='Marketing' control='input' type='radio' value='marketing' />
            <Form.Field name='interest' onChange={this.handleChange} label='Social Work' control='input' type='radio' value='social work'/>
            <Form.Field name='interest' onChange={this.handleChange} label='Medical' control='input' type='radio' value='medical'/>
            <Form.Field name='interest' onChange={this.handleChange} label='Communications' control='input' type='radio' value='communications' />
            <Form.Field name='interest' onChange={this.handleChange} label='Hospitality' control='input' type='radio' value='hospitality'/>
            <Form.Field name='interest' onChange={this.handleChange} label='Parks and Rec' control='input' type='radio' value='parks and rec'/>
            <Form.Field name='interest' onChange={this.handleChange} label='Education' control='input' type='radio' value='education'/>
        </Form.Group>
        <Link to='/profile'><Form.Button onClick={this.handleSubmit} >Submit</Form.Button></Link>
      </Form>
      </Segment>
    )
  }
}

export default ProfileForm
