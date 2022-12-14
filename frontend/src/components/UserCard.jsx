import { useEffect, useState } from 'react'
import { Col, Button, Row, Container, Card} from "react-bootstrap";
import ListGroup from 'react-bootstrap/ListGroup';
import axios from 'axios'

function UserCard(props){

return(
  <Card>
    <Card.Img 
        variant="top" 
        src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" 
        height = 'auto'
        width = 'auto'
        />
    <Card.Body>
      <Card.Title> {props.user.first_name} {props.user.last_name} </Card.Title>
      <ListGroup variant="flush">
        <ListGroup.Item><b>Email: </b> {props.user.email}</ListGroup.Item>
        <ListGroup.Item><b>Job Title: </b>{props.user.job_title}</ListGroup.Item>
      </ListGroup>
    </Card.Body>
  </Card> 
)

}

export default UserCard;