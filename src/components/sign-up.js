import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';

import { Container, Form, FormLabel, FormControl, Button } from 'react-bootstrap';

import { register } from '../API/user';

class SignUp extends Component {
    constructor(props){
        super(props);
        this.state = {
            username: '',
            password: '',
            errorUsername: '',
            errorPassword: ''
        }
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
        register()

        // if (this.handleValidate()) {
        //         .then((res) => {
        //             if (res) {
        //                 this.props.history.push('/list');
        //             }
        //             else {
        //                 this.props.history.push('/');
        //             }
        //         })
        //         .catch(err => { })
        // }
        console.log(this.state);
    }

    render() {
        return (
            <Container className='mt-4 border rounded'>
                <h3 className='text-primary text-center mt-4'>Sign up</h3>
                <Form>
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
                    <Button type='submit' onClick={this.handleLogin}> 
                        Sign up
                    </Button>
                </Form>
            </Container>
        );
    }
}

export default withRouter(SignUp);
