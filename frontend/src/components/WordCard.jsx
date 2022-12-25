import {Card} from "react-bootstrap";

function WordCard(props){

return(
    <Card>
        <Card.Body>
        <Card.Text>
            <i>Please define: </i><u>{props.word}</u>
        </Card.Text>
        <Card.Text>
            <i>Oxford Dictionary Definition: </i><u>{props.oDef}</u>
        </Card.Text>
        </Card.Body>
    </Card> 
)

}

export default WordCard;