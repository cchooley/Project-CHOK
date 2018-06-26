import React, { Component } from 'react';
import { Header, Image, Segment, Button } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

export default class Profile extends Component {
  render() {
    return (
      <Segment>
        <Image src='https://image.ibb.co/fQ9FkT/hsconor.jpg' size='small' rounded /> 
        <Header as='h1' >
        Conor Hooley
        </Header>
        <Header as='h3'>
        School: Wheat Ridge High School
        </Header>
        <Link to='/apply'><Button size='massive'>Apply to Internship</Button></Link>
      </Segment>
    );
  }
}