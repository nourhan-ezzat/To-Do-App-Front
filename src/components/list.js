import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { Container, Form, FormLabel, FormControl, Button, Table } from 'react-bootstrap';

import { logout } from '../API/user';
import { createList, updateList, deleteList, getLists } from '../API/list';

class List extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            title: '',
            items: []
        };
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    getAll = () => {
        getLists().then(data => {
            this.setState({ items: [...data] });
        });
    }

    handleAdd = e => {
        e.preventDefault();
        createList(this.state.title).then(() => { this.getAll(); })
    }

    handleEdit = (title, id, e) => {
        e.preventDefault();
        this.setState({
            id: id,
            title: title
        });
    }

    handleUpdate = e => {
        e.preventDefault();
        updateList(this.state.title, this.state.id).then(() => { this.getAll(); })
    }

    handleDelete = (itme, e) => {
        e.preventDefault();
    }

    handleLogout = e => {
        logout()
            .then(res => {
                console.log("done")
            })
            .catch(err => { })
    }

    render() {
        return (
            <Container className='mt-4 border rounded'>
                <Form>
                    <FormLabel className='text-primary'>List Title</FormLabel>
                    <FormControl type='text' name='title'
                        value={this.state.title} onChange={this.handleChange} />
                    <br />
                    <Button className='btn-primary d-block mb-4 w-25 mx-auto' size='md'
                        onClick={this.handleAdd}>
                        Add List
                    </Button>
                    <Button className='btn-primary d-block mb-4 w-25 mx-auto' size='md'
                        onClick={this.handleUpdate}>
                        Update List
                    </Button>
                </Form>
                <Table striped bordered>
                    {
                        this.state.items.map((item, index) => (
                            <tr key={index}>
                                <td>{item[0]}</td>
                                <td>
                                    <Button className='btn btn-info' onClick={this.handleEdit}>
                                        Edit List
                                        </Button>
                                </td>
                                <td>
                                    <Button className='btn btn-danger' onClick={this.handleDelete}>
                                        Delete List
                                        </Button>
                                </td>
                            </tr>
                        ))
                    }
                </Table>
                <Link to='/' className='btn btn-primary d-block mb-4 w-25 mx-auto'
                    onClick={this.handleLogout}>
                    Log out
                </Link>
            </Container>
        );
    }
}

export default List;
