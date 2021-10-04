
import React from 'react';
import {Button, Card, } from 'react-bootstrap';
import './Course.css';

const Course = (props) => {
    const {name, fee, picture, company, email} = props.course;
    return (
        <div>
                <Card style={{ width: '18rem', margin: '10px' }}>
                    <Card.Img variant="top" src={picture} style={{width: "287px", height: "250px"}} />
                <Card.Body>
                    <Card.Title>Name: {name}</Card.Title>
                    <Card.Title><small>Course Fee: $ {fee}</small></Card.Title>
                    <Card.Title><small>Coopany: {company}</small></Card.Title>
                    <Card.Title><small>Email: {email}</small></Card.Title>
                    <Button variant="success">BUY NOW</Button>
                </Card.Body>
                
            </Card>
        </div>
    );
};

export default Course;