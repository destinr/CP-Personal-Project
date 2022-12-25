import axios from 'axios'
import SCOTUS from '../assets/scotus.jpg'
import {Container, Row, Col,Button, Card} from "react-bootstrap";
import ListGroup from 'react-bootstrap/ListGroup';
import { Navigate, useNavigate } from "react-router-dom";
import UserCard from '../components/UserCard.jsx'
import RecentWordsCard from '../components/RecentWordsCard.jsx'


function UserPage(props){

  return(
    <Container fluid>
          <Row>
            <h1> Welcome, {props.user.first_name}!</h1>
          </Row>
          <Row>
            <Col><UserCard user={props.user}/></Col> 
            <Col><RecentWordsCard user={props.user}/></Col>
          </Row>
      </Container>
  )
}

export default UserPage