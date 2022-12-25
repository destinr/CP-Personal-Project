import {Card, Row, Col, Container} from "react-bootstrap";
import axios from 'axios'
import {useEffect, useState} from 'react'
import WordCard from '../components/WordCard.jsx'

function DefSubmitPage(props){

  const [word, setWord] = useState('')
  const [wordID, setWordID] = useState('')
  const [oDef, setODef] = useState('')
  const [userDef, setUserDef] = useState('')

  useEffect(()=>{

    axios.get('/getWord/')
    .then((response)=>{
      console.log(response.data)
      setWord(response.data['word'])
      setWordID(response.data['id'])
      setODef(response.data['ODef'])
      }
    )
  }, [])

  async function sendDef(){
    event.preventDefault()
    let myResponse = await axios
      .post('/submitDef/',{'userDef':userDef, 'wordID':wordID, 'userEmail': props.user.email})
    if(myResponse.data['success']==true){
      window.location.reload()
    }
    else{
      alert("oops, something went wrong")
    }
  }

  return(
    <Container fluid>
      <Row>
        <h1> Let's submit some definitions!</h1>
      </Row>
      <Row>
        <Col><WordCard word={word} oDef = {oDef}/></Col> 
        <Col>
          <Card>
              <Card.Body>
              <Card.Text>
                  Submit your definition below.
              </Card.Text>
              <Card.Text>
              <input
                  type="user definition"
                  className="form-control mt-1"
                  placeholder= 'Define away!'
                  onChange={(event)=>{setUserDef(event.target.value)}}
              />
              <button type="submit" className="btn btn-primary" onClick={()=>{sendDef()}}>
                  Submit definition!
              </button>
              </Card.Text>
              </Card.Body>
          </Card> 
        </Col>
      </Row>
    </Container>
  )
}

export default DefSubmitPage;