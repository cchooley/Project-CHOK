import React, { Component } from 'react'
import { Form } from 'semantic-ui-react'

const options = [
  { key: '1', text: 'Music', value: 'music' },
  { key: '2', text: 'Art', value: 'art' },
  { key: '3', text: 'Theater', value: 'theater' },
  { key: '4', text: 'Finance', value: 'finance' },
  { key: '5', text: 'Marketing', value: 'marketing' },
  { key: '6', text: 'Social Work', value: 'socialWork' },
  { key: '7', text: 'Medical', value: 'medical' },
  { key: '8', text: 'Communications', value: 'communications' },
  { key: '9', text: 'Hospitality', value: 'hospitality' },
  { key: '10', text: 'Parks and Rec', value: 'parksAndRec' },
  { key: '11', text: 'Education', value: 'education' }
]

class ProfileForm extends Component {
  state = {}

  handleChange = (e, { value }) => this.setState({ value })

  render() {
    const { value } = this.state
    return (
      <Form>
        <Form.Input fluid label='First name' placeholder='First name' />
        <Form.Input fluid label='Last name' placeholder='Last name' />
        <Form.Input fluid label='School name' placeholder='School name' />
        <Form.Select fluid label='Interests' options={options} placeholder='Interests' />
        <Form.Button>Submit</Form.Button>
      </Form>
    )
  }
}

export default ProfileForm
