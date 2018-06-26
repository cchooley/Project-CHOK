import React, { Component } from 'react'
import { Menu, Segment } from 'semantic-ui-react'


export default class NavBar extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Segment className='nav-bar' inverted>
        <Menu  inverted  secondary>
          <Menu.Item name='home' active={activeItem === 'home'} onClick={this.handleItemClick} />
          <Menu.Item
            name='sign up'
            active={activeItem === 'sign up'}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name='login'
            active={activeItem === 'login'}
            onClick={this.handleItemClick}
          />
        </Menu>
        <img className='main-logo'  src='./assets/bettership.png' alt='logo' />
      </Segment>
    )
  }
}