import axios from 'axios'
import SCOTUS from '../assets/scotus.jpg'
import {Container, Row, Col,Button, Card} from "react-bootstrap";
import ListGroup from 'react-bootstrap/ListGroup';
import { Navigate, useNavigate } from "react-router-dom";

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
              <h1> Welcome to Plain Meaning?</h1>
            </Row>
            <Row>
              <img className='.img-fluid' src="https://www.heritage.org/sites/default/files/styles/facebook_optimized/public/images/2017-11/iStock-543822084.jpg?itok=EhPXKcdi" alt="Card image"/>
            </Row>
        </Container>
    )
  }
  else if (props.user){
    return(
      <h1> Hello World </h1>
    )
  }
}

export default LandingPage