import React, { Component } from 'react';
import { Header, Image, Segment, Button } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

export default class Profile extends Component {

  render() {
    const id = window.location.search.substr(1).split('=')
    const profile = this.props.data.filter(user => user.id == id)
    console.log(profile)
    
    return (
      <div></div>
    );
  }
}