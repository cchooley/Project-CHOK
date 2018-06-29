import React from 'react';
import { Button, Modal, Form, } from "semantic-ui-react"

const Login = (props) => {
  return (
    <Modal trigger={<Button className="ui-button" role="button">Login</Button>}>
      <Modal.Header>Login</Modal.Header>
      <Modal.Content image>
        <Modal.Description>
          <Form >
            <Form.Field>
              <label>Email</label>
              <input name='loginEmail'
                value={props.loginEmail}
                onChange={props.handleChange}
                placeholder="Email" />
            </Form.Field>
            <Form.Field>
              <label>Password</label>
              <input name='loginPassword'
                value={props.loginPassword}
                onChange={props.handleChange}
                placeholder="Password" />
            </Form.Field>
            <Button onClick={props.handleSubmit} type="submit">Submit</Button>
          </Form>
        </Modal.Description>
      </Modal.Content>
    </Modal>
  );
};

export default Login;