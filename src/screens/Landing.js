
import React, { Component } from 'react';
import { Grid, Header, Message } from 'semantic-ui-react';

import SigninForm from '../components/SigninForm';
import SignupForm from '../components/SignupForm';

class Landing extends Component {
    state = {
        signup: false,
    }

    handleSignupToggle = (signup) => () => {
        this.setState({ signup });
    }

    render() {
        const { signup } = this.state;

        return (
            <Grid textAlign="center" style={{ height: '100%' }} verticalAlign="middle">
                <Grid.Column style={{ paddingTop: 100, maxWidth: 450 }}>
                    <Header as="h2" color="teal" textAlign="center">
                    {signup ? 'Create an account' : 'Log-in to your account'}
                    </Header>
                    {signup ? <SignupForm /> : <SigninForm />}
                    <Message>
                        {signup ? (
                            <button onClick={this.handleSignupToggle(false)}>Signin?</button>
                         ) : (
                            <button onClick={this.handleSignupToggle(true)}>Signup?</button>
                         )}
                    </Message>
                </Grid.Column>
            </Grid>
        );
    }
}

export default Landing;
