import axios from 'axios'
import SCOTUS from '../assets/scotus.jpg'
import {Button, Card} from "react-bootstrap";
import ListGroup from 'react-bootstrap/ListGroup';
import { Navigate, useNavigate } from "react-router-dom";


function LandingPage(){
    let navigate = useNavigate()
    function logIn(){
      let path = '/auth'
      navigate(path)

    }

    return(
      <body>
        <Card>
          <Card.Img src="https://www.heritage.org/sites/default/files/styles/facebook_optimized/public/images/2017-11/iStock-543822084.jpg?itok=EhPXKcdi" alt="Card image" />
          <Card.ImgOverlay class='d-flex align-self-center'>
            <Card.Title>Welcome to Plain Meaning?</Card.Title>
            <Card.Text>
              Textual legal analysis often relies on the "plain meaning" of statutes and codes. 
              Unfortunately, “plain meanings” aren’t so plain; there are often a multitude of valid readings of a particular word or phrase.
            </Card.Text>
            <Card.Text>Plain Meaning? allows its users to submit their definition of oft-cited words to help provide an average "plain meaning.</Card.Text>
            <Card.Link href="/#/auth">Log In/ Sign Up</Card.Link>
          </Card.ImgOverlay>
        </Card>
    </body>
  )
}

export default LandingPage