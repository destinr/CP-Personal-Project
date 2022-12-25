import { useEffect, useState } from 'react'
import { Col, Button, Row, Container, Card} from "react-bootstrap";
import ListGroup from 'react-bootstrap/ListGroup';
import axios from 'axios'

function SiteInfoCard(){

    return(
    <Card>
        <Card.Body>
        <Card.Title> What Plain Meaning? is all about. </Card.Title>
        <Card.Text>
            Textual legal analysis often relies on the "plain meaning" of statutes and codes. Unfortunately, “plain meanings” aren’t so plain; there are often a multitude of valid readings of a particular word or phrase. Textualist judges are left to determine what the “plainest” meaning is based on their own instincts and preferences. This leads to arbitrary decision making and has had a profound impact on the validity of the American judicial system. Plain Meaning? is a crowd-sourcing tool to provide jurists with common-sense definitions of the words they cite.
        </Card.Text>
        <Card.Title> What V1.0 allows you to do about it </Card.Title>
        <Card.Text>
            This site currently feeds you a series of random words to provide definitions for. In the future, it will serve you words that judges' have recently cited the "plain meaning" of in important cases. 
        </Card.Text>
        </Card.Body>
    </Card> 
    )
};

export default SiteInfoCard;