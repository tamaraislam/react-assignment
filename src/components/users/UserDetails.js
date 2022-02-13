import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { ListGroup } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { Card } from 'react-bootstrap';
const UserDetails = () => {
    const { id } = useParams();
    const [user, setUser] = useState([]);
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
            .then(res => res.json())
            .then(data => setUser(data))
    }, [])
    console.log(user);
    const { name, username, email, phone, company, website, address } = user;
    return (

        <Container fluid>
            <Row>
                <Col></Col>
                <Col xs={5}>
                <Card style={{ width: '18rem' }}>
                <Card.Header>User Details</Card.Header>
                    <ListGroup variant="flush">
                
                    <ListGroup.Item>-name:  <small>{name}</small></ListGroup.Item>
                    <ListGroup.Item>-username:  <small>{username}</small></ListGroup.Item>
                    <ListGroup.Item>-email:  <small>{email}</small></ListGroup.Item>
                    <ListGroup.Item>-phone:  <small>{phone}</small></ListGroup.Item>
                    <ListGroup.Item>-company:  <small>{company?.name}</small></ListGroup.Item>
                    <ListGroup.Item>-website: <small>{website}</small></ListGroup.Item>
                    <ListGroup.Item>-address: <li>-street:  <small>{address?.street}</small></li>
                        <li>-sulte:  <small>{address?.suite}</small></li>
                        <li>-city:  <small>{address?.city}</small></li>
                        <li>-zipcode:  <small>{address?.zipcode}</small></li></ListGroup.Item>
                </ListGroup>
                </Card>
                </Col>
                <Col></Col>
            </Row>
        </Container>

    );
};

export default UserDetails;