import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';

import { Container, Form, FormLabel, FormControl, Button } from 'react-bootstrap';

import { login } from '../API/user';

class SignIn extends Component {
    state = {
        username: '',
        password: '',
        errorUsername: '',
        errorPassword: ''
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleValidate = () => {
        let errorUsername = '';
        let errorPassword = '';

        if (!this.state.username) {
            errorUsername = 'Username must not be empty';
        }

        if (!this.state.password) {
            errorPassword = 'Password must not be empty';
        }

        else if (this.state.password.length < 6 || this.state.password.length > 6) {
            errorPassword = 'Password lenght must be 6 characters';
        }

        if (errorUsername || errorPassword) {
            this.setState({ errorUsername, errorPassword });
            return false;
        }

        return true;
    }

    handleLogin = e => {
        e.preventDefault();
        const { username, password } = this.state
        if (this.handleValidate()) {
            login({ username, password })
                .then((res) => {
                    if (res) {
                        localStorage.setItem('userToken', res.token);
                        this.props.history.push('/list');
                    }
                    else {
                        this.props.history.push('/');
                    }
                })
                .catch(err => { })
        }
        console.log(this.state);
    }

    render() {
        return (
            <Container className='mt-4 border rounded'>
                <h3 className='text-primary text-center mt-4'>Sign in</h3>
                <Form onSubmit={this.handleLogin}>
                    <FormLabel className='text-primary'>Username</FormLabel>
                    <FormControl type='text' name='username'
                        value={this.state.username} onChange={this.handleChange} />
                    <h6 className='text-danger'>{this.state.errorUsername}</h6>
                    <br />
                    <FormLabel className='text-primary'>Password</FormLabel>
                    <FormControl type='password' name='password'
                        value={this.state.password} onChange={this.handleChange} />
                    <h6 className='text-danger'>{this.state.errorPassword}</h6>
                    <br />
                    <Button type='submit'> 
                        Sign in
                    </Button>
                </Form>
                <Link to='/sign-up' className='btn btn-primary d-block mb-4 w-25 mx-auto'>
                    Sign up
                </Link>
            </Container>
        );
    }
}

export default withRouter(SignIn);
