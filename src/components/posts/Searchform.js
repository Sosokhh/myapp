import React, {useEffect, useState} from 'react';
import {Form, Row, Col, ButtonToolbar, Button} from "react-bootstrap";
import axios from "axios";

function Search({onSubmit}) {
    const [users, setUsers] = useState([]);
    const [formValues, setFormValues] = useState({
        userId:'',
        title: ''
    });


    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(response => setUsers(response.data))
            .catch(console.error)
    },[])


    const ChangeHandler = (field) => {
        return (e) => {
           setFormValues({...formValues, [field]: e.target.value})
        }
    };

    const submitForm = (e) => {
        e.preventDefault();
        const values = Object.keys(formValues).reduce((map, key) => {
            if (formValues[key]) {
                map[key] = formValues[key];
            }
            return map;
        }, {})
        onSubmit && onSubmit(values)
        console.log(values)
    };

    const resetForm = (e) => {
        e.preventDefault();
        setFormValues({
            userId:'',
            title: ''
        })
    }

    return (
        <Form className="mt-3" onSubmit={submitForm} onReset={resetForm}>
            <Row>
            <Form.Group as={Col} className="mb-3" >
                <Form.Label>User</Form.Label>
                <Form.Select aria-label="Default select example" value={formValues.userId} onChange={ChangeHandler('userId')}>
                    <option value="">Choose user</option>
                    {
                        users.map(user => <option key={user.id} value={user.id}>{user.name}</option>)
                    }
                </Form.Select>
            </Form.Group>
            <Form.Group as={Col} className="mb-3" >
                <Form.Label>Title</Form.Label>
                <Form.Control placeholder="Enter text"  value={formValues.title} onChange={ChangeHandler('title')} />
            </Form.Group>
            </Row>
            <ButtonToolbar className="justify-content-end">
                <Button type="submit"   variant="primary" className="me-2">Search</Button>
                <Button type="reset"    variant="secondary">Reset</Button>
            </ButtonToolbar>
        </Form>
    );
}

export default Search;