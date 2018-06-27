import React, { Component } from 'react'
import { Form, TextArea, Button, Segment } from 'semantic-ui-react'

const options = [
  { key: 'm', text: 'Male', value: 'male' },
  { key: 'f', text: 'Female', value: 'female' },
]

export default class AppForm extends Component {
  state = {}

  handleChange = (e, { value }) => this.setState({ value })
  
  render() {
    const { value } = this.state
    return (
      <Segment>
        <Form>
          <Form.Input fluid label='First name' 
                      placeholder='First name' />
          <Form.Input fluid label='Last name' 
                      placeholder='Last name' />
          <Form.Input fluid label='Address' 
                      placeholder='Address' />
          <Form.Input fluid label='Phone number' 
                      placeholder='Phone number' />
          <Form.Input fluid label='Email' 
                      placeholder='Email' />
          <Form.Input fluid label='Age' 
                      placeholder='Age' />
          <Form.Select  fluid label='Gender' 
                        options={options} 
                        placeholder='Gender' />
          <Form.Field control={TextArea} 
                      label='About' 
                      placeholder='Tell us more about you...' />
          <Form.Field control={Button}>Submit</Form.Field>
        </Form>
      </Segment>
    )
  }
}