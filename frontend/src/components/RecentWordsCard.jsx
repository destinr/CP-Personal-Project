import { useEffect, useState } from 'react'
import { Col, Button, Row, Container, Card} from "react-bootstrap";
import ListGroup from 'react-bootstrap/ListGroup';
import axios from 'axios'

function RecentWordsCard(props){

    const [recentDefs, setRecentDefs] = useState([])
    
    useEffect(()=>{

        axios.post('/getRecent/',{'userEmail': props.user.email})
        .then((response)=>{
          console.log(response.data)
          setRecentDefs(response.data['data'])
          }
        )
      }, [])

    return(
    <Card>
        <Card.Body>
        <Card.Title> Recently Defined Words </Card.Title>
        <ListGroup variant="flush">
        {recentDefs && Object.keys(recentDefs).map((key,index) =>{
            return(
                <ListGroup.Item>{key}: {recentDefs[key]}</ListGroup.Item>
            )
        })}
        </ListGroup>
        <Button href="/#/SubmitDefinitions">Submit some definitions!</Button>
        </Card.Body>
    </Card> 
    )
};

export default RecentWordsCard;