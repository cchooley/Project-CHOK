import React, { Component } from 'react'
import { Form, Segment } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

class ProfileForm extends Component {
  render() {
    return (
      <Segment>
      <Form>
        <Form.Input name='name' 
                    onChange={this.handleChange} 
                    fluid label='First and last name' 
                    placeholder='First and last name' />  
        <Form.Input name='picture' 
                    onChange={this.handleChange} 
                    fluid label='Profile photo link' 
                    placeholder='Profile photo link' />
        <Form.Input name='school' 
                    onChange={this.handleChange} 
                    fluid label='School name' 
                    placeholder='School name' />
        <Form.Input name='email' 
                    onChange={this.handleChange} 
                    fluid label='Email' 
                    placeholder='Email' />
        <Form.Input name='password' 
                    onChange={this.handleChange} 
                    fluid label='Password' 
                    placeholder='Password' />
        <Form.Group  grouped>
          <label>Interest</label>
          <Form.Field name='interest' 
                      onChange={this.handleChange} 
                      label='Art' 
                      control='input' 
                      type='radio' 
                      value='art'/>
          <Form.Field name='interest' 
                      onChange={this.handleChange} 
                      label='Music' control='input' 
                      type='radio' 
                      value='music' />
          <Form.Field name='interest' 
                      onChange={this.handleChange} 
                      label='Theater' 
                      control='input' 
                      type='radio' 
                      value='theater' />
          <Form.Field name='interest' 
                      onChange={this.handleChange} 
                      label='Finance' 
                      control='input' 
                      type='radio' 
                      value='finance' />
          <Form.Field name='interest' 
                      onChange={this.handleChange} 
                      label='Marketing' 
                      control='input' 
                      type='radio' 
                      value='marketing' />
          <Form.Field name='interest' 
                      onChange={this.handleChange} 
                      label='Social Work' 
                      control='input' 
                      type='radio' 
                      value='social work'/>
          <Form.Field name='interest' 
                      onChange={this.handleChange} 
                      label='Medical' 
                      control='input' 
                      type='radio' 
                      value='medical'/>
          <Form.Field name='interest' 
                      onChange={this.handleChange} 
                      label='Communications' 
                      control='input' 
                      type='radio' 
                      value='communications' />
          <Form.Field name='interest' 
                      onChange={this.handleChange} 
                      label='Hospitality' 
                      control='input' 
                      type='radio' 
                      value='hospitality'/>
          <Form.Field name='interest' 
                      onChange={this.handleChange} 
                      label='Parks and Rec' 
                      control='input' 
                      type='radio' 
                      value='parks and rec'/>
          <Form.Field name='interest' 
                      onChange={this.handleChange} 
                      label='Education' 
                      control='input' 
                      type='radio' 
                      value='education'/>
        </Form.Group>
        <Link to='/profile'><Form.Button onClick={this.props.handleSubmit} >Submit</Form.Button></Link>
      </Form>
      </Segment>
    )
  }
}

export default ProfileForm
