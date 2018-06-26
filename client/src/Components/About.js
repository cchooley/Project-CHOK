import React, { Component } from 'react';
import { Image, Item, Segment } from 'semantic-ui-react'
import { Message } from 'semantic-ui-react'

export default class About extends Component {
  render() {
    return (
      <Segment>
        <Item.Group>
          <Item>
            <Item.Image size='massive' src='./assets/intern.jpg' />
            <Item.Content>
              <Item.Header as='a'>Bettership - A Better Internship Experience </Item.Header>
              <Item.Meta>Internships are a great opportunity for high school students to learn and develope professional skills.  The problem is, they can be really hard to find and track the progress of.  Here at Bettership our goal is to streamline the process for students, schools, and the companies hiring your students.  </Item.Meta>
            </Item.Content>
          </Item>
        </Item.Group>
        <Message color='white'>
          <h2>Sponsor Companies</h2>
          <img className='logo' src='./assets/art-museum.jpg' alt='Art Museum' />
          <img className='logo' src='./assets/Bp-logo.jpg' alt='BP' />
          <img className='logo' src='./assets/fb-logo.png' alt='FB' />
          <img className='logo' src='./assets/hospital.jpg' alt='Childrens Hospital' />
          <img className='logo' src='./assets/red-cross.png' alt='Red Cross' />
        </Message>
      </Segment>
    );
  }
}