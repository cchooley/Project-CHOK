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
        <Form.Group  grouped>
          <label>Interest</label>
          <Form.Field name='interest' 
                      onChange={this.props.handleChange} 
                      label='Art' 
                      control='input' 
                      type='radio' 
                      value='art'/>
          <Form.Field name='interest' 
                      onChange={this.props.handleChange} 
                      label='Music' control='input' 
                      type='radio' 
                      value='music' />
          <Form.Field name='interest' 
                      onChange={this.props.handleChange} 
                      label='Theater' 
                      control='input' 
                      type='radio' 
                      value='theater' />
          <Form.Field name='interest' 
                      onChange={this.props.handleChange} 
                      label='Finance' 
                      control='input' 
                      type='radio' 
                      value='finance' />
          <Form.Field name='interest' 
                      onChange={this.props.handleChange} 
                      label='Marketing' 
                      control='input' 
                      type='radio' 
                      value='marketing' />
          <Form.Field name='interest' 
                      onChange={this.props.handleChange} 
                      label='Social Work' 
                      control='input' 
                      type='radio' 
                      value='social work'/>
          <Form.Field name='interest' 
                      onChange={this.props.handleChange} 
                      label='Medical' 
                      control='input' 
                      type='radio' 
                      value='medical'/>
          <Form.Field name='interest' 
                      onChange={this.props.handleChange} 
                      label='Communications' 
                      control='input' 
                      type='radio' 
                      value='communications' />
          <Form.Field name='interest' 
                      onChange={this.props.handleChange} 
                      label='Hospitality' 
                      control='input' 
                      type='radio' 
                      value='hospitality'/>
          <Form.Field name='interest' 
                      onChange={this.props.handleChange} 
                      label='Parks and Rec' 
                      control='input' 
                      type='radio' 
                      value='parks and rec'/>
          <Form.Field name='interest' 
                      onChange={this.props.handleChange} 
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
