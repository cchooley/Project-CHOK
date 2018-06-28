import React, { Component } from 'react'
import { Form, Segment } from 'semantic-ui-react'
import { Link, Redirect } from 'react-router-dom'

class ProfileForm extends Component {
  render() {
    if(this.props.signedUp) {
      return <Redirect to='/profile' />
    }
    return (
      <Segment>
      <Form>
        <Form.Input name='name' 
                    onChange={this.props.handleChange} 
                    fluid label='First and last name' 
                    placeholder='First and last name'
                    value={this.props.name} />  
        <Form.Input name='picture' 
                    onChange={this.props.handleChange} 
                    fluid label='Profile photo link' 
                    placeholder='Profile photo link'
                    value={this.props.picture} />
        <Form.Input name='school' 
                    onChange={this.props.handleChange} 
                    fluid label='School name' 
                    placeholder='School name'
                    value={this.props.school} />
        <Form.Input name='email' 
                    onChange={this.props.handleChange} 
                    fluid label='Email' 
                    placeholder='Email'
                    value={this.props.email} />
        <Form.Input name='password' 
                    onChange={this.props.handleChange} 
                    fluid label='Password' 
                    placeholder='Password'
                    value={this.props.password} />
        <Link to='/profile'><Form.Button onClick={this.props.handleSubmit} >Submit</Form.Button></Link>
      </Form>
      </Segment>
    )
  }
}

export default ProfileForm
