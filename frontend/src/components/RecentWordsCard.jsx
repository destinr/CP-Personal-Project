import { useEffect, useState } from 'react'
import { Col, Button, Row, Container, Card} from "react-bootstrap";
import ListGroup from 'react-bootstrap/ListGroup';
import axios from 'axios'

function RecentWordsCard(props){

    return(
    <Card>
        <Card.Body>
        <Card.Title> Recently Defined Words </Card.Title>
        <ListGroup variant="flush">
            <ListGroup.Item>Example 1</ListGroup.Item>
            <ListGroup.Item>Example 2</ListGroup.Item>
            <ListGroup.Item>Example 3</ListGroup.Item>
        </ListGroup>
        </Card.Body>
    </Card> 
    )
};

export default RecentWordsCard;