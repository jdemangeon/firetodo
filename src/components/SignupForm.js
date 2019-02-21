import React, { Component } from 'react';

import {
  Button,
  Form,
  Message,
  Segment
} from 'semantic-ui-react';

import { auth } from '../client/firebase';

class SignupForm extends Component {
  state = {
    login: '',
    pass: '',
    message: '',
  }

  handleInputChange = (e)  =>{
    const { name, value } = e.target;

    this.setState({ [name]: value });
  }

  handleSignup = () => {
    const { login, pass } = this.state;

    auth.createUserWithEmailAndPassword(login, pass).then((user) => {
      console.log({ user });
    })
    .catch((error) => {
      console.log({ error });
      this.setState({ message: error.message });
    });
  };

  render() {
    const { message } = this.state;

    return (
      <div>
        <Form size="large">
          <Segment stacked>
            <Form.Input
              fluid
              icon="user"
              iconPosition="left"
              placeholder="E-mail address"
              name="login"
              value={this.state.login}
              onChange={this.handleInputChange}
            />
            <Form.Input
              fluid
              icon="lock"
              iconPosition="left"
              placeholder="Password"
              type="password"
              name="pass"
              value={this.state.pass}
              onChange={this.handleInputChange}
            />
            <Button color="teal" fluid size="large" onClick={this.handleSignup}>
              Create
            </Button>
          </Segment>
        </Form>
        {message && <Message>{message}</Message>}
      </div>
    );
  }
}

export default SignupForm;
