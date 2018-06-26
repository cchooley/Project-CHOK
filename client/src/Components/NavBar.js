import React, { Component } from "react";
import { Menu, Segment } from "semantic-ui-react";
import { Button, Header, Image, Modal } from "semantic-ui-react";
import { Checkbox, Form } from "semantic-ui-react";

export default class NavBar extends Component {
  state = { activeItem: "home" };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    return <Segment className="nav-bar" inverted>
        <Menu inverted secondary>
          <Modal trigger={<button className="ui button" role="button">
                Sign Up
              </button>}>
            <Modal.Header>Sign Up</Modal.Header>
            <Modal.Content image>
              <Modal.Description>
                <Form>
                  <Form.Field>
                    <label>First Name</label>
                    <input placeholder="First Name" />
                  </Form.Field>
                  <Form.Field>
                    <label>Last Name</label>
                    <input placeholder="Last Name" />
                  </Form.Field>
                  <Form.Field>
                    <Checkbox label="I agree to the Terms and Conditions" />
                  </Form.Field>
                  <Button type="submit">Submit</Button>
                </Form>
              </Modal.Description>
            </Modal.Content>
          </Modal>
          <Modal trigger={<button className="ui button" role="button">
                Login
              </button>}>
            <Modal.Header>Login</Modal.Header>
            <Modal.Content image>
              <Modal.Description>
                <Form>
                  <Form.Field>
                    <label>First Name</label>
                    <input placeholder="First Name" />
                  </Form.Field>
                  <Form.Field>
                    <label>Last Name</label>
                    <input placeholder="Last Name" />
                  </Form.Field>
                  <Button type="submit">Submit</Button>
                </Form>
              </Modal.Description>
            </Modal.Content>
          </Modal>
        </Menu>
        <img className="main-logo" src="./assets/bettership.png" alt="logo" />
      </Segment>;
  }
}
