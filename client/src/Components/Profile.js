import React, { Component } from 'react';
import { Image, Segment, Button } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

export default class Profile extends Component {

  render() {
    console.log(this.props)
    let profile = this.props.data.filter(student => student.id === this.props.userId)
    if(profile.length) {
      profile = profile[0]
    }
    
    return (
      <Segment>
        <Image src={profile.picture} size='medium' />
        <h1>{profile.name}</h1>
        <h4>{profile.school}</h4>
        <Link to='/internships'><Button size='massive'>Apply to Internship</Button></Link>
      </Segment>
    );
  }
}