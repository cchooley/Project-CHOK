import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Button, Card, Image, Icon, Divider } from 'semantic-ui-react'

const userURL = 'https://chok-database.herokuapp.com/students'

export default class InternshipList extends Component {

  constructor(props) {
    super(props)
    this.state ={
      internship_id: ''

    }
  }
  

  handleSubmit = (event) => {
    event.preventDefault()
    this.setState({
      internship_id: event.target.name
    })
    
    let internshipId = this.state.internship_id
    let url = userURL + '/' + this.props.userId
    console.log(url);
    
    	fetch((url, {
        method: "PUT",
        headers: new Headers ({"content-type": "application/json"}),
        body: JSON.stringify({
          internshipId
        })
      }))
      .then(response => response.json())
      .then(result =>	{
        console.log(result);
      })
    }
  

  render() {
  console.log(this.state.internship_id);
  
    const internships = this.props.data.map(internship => {
      return (
        <Card link id='card' key={internship.id}>
          <Card.Content>
            <Image floated='right' size='small' src={internship.logo} />
            <Card.Header>{internship.name}</Card.Header>
            <Divider horizontal></Divider>
            {internship.paid ? (<Card.Meta>Paid Internship</Card.Meta>) : (<Card.Meta>Unpaid Internship</Card.Meta>) }
            <Divider horizontal></Divider>
            <Card.Meta>{internship.hours} hours per week</Card.Meta>
          </Card.Content>
          <Card.Content>
            <Card.Description>{internship.description}</Card.Description>
          </Card.Content>
          <Card.Content>
            <Card.Meta >
            <Icon.Group size='large'>
              <Icon name='marker' />
              <Icon corner  />
            </Icon.Group>
              {internship.location}
            </Card.Meta>
          </Card.Content>
          <Card.Content as='a' >
            <Card.Meta >
            <Icon.Group size='large'>
              <Icon name='linkify' />
              <Icon corner  />
            </Icon.Group>
            <a target='_blank' href={internship.website}>{internship.website}</a>
            </Card.Meta>
          </Card.Content>
          <Card.Content extra color='green'>
            <Link to='/apply'>
              <div  className='ui two buttons' >
              <Button onClick={this.handleSubmit} name={internship.id} color='blue'>Apply</Button>
              </div>
            </Link>
          </Card.Content>
        </Card>
      ) 
    })

    return (
      <div>
        <Card.Group itemsPerRow={1}>
          {internships}
        </Card.Group>
      </div>
    )
  }
}