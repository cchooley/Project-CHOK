import React, { Component } from 'react';
import { Header, Image, Segment, Button } from 'semantic-ui-react'

export default class Profile extends Component {

  render() {
    
    return (
      <Segment>
        <Image/>
        <Header></Header>
        <Button size='massive'>Apply to Internship</Button>
      </Segment>
    );
  }
}