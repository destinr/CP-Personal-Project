import axios from 'axios'
import SCOTUS from '../assets/scotus.jpg'
import {Container, Row, Col,Button, Card} from "react-bootstrap";
import ListGroup from 'react-bootstrap/ListGroup';
import { Navigate, useNavigate } from "react-router-dom";
import UserCard from '../components/UserCard.jsx'
import RecentWordsCard from '../components/RecentWordsCard.jsx'


function LandingPage(props){
    let navigate = useNavigate()
    function logIn(){
      let path = '/auth'
      navigate(path)

    }
    if (!props.user){
      return(
          <Container fluid>
            <Row>
              <h1>Welcome to <i>Plain Meaning?</i></h1>
            </Row>
            <Row>
              <img className='.img-fluid' src="https://www.heritage.org/sites/default/files/styles/facebook_optimized/public/images/2017-11/iStock-543822084.jpg?itok=EhPXKcdi" alt="Card image"/>
            </Row>
        </Container>
    )
  }
  else if (props.user){
    return(
      <Container fluid>
            <Row>
              <h1> Welcome, {props.user.first_name}</h1>
            </Row>
            <Row>
              <Col><UserCard user={props.user}/></Col> 
              <Col><RecentWordsCard/></Col>
            </Row>
        </Container>
    )
  }
}

export default LandingPage