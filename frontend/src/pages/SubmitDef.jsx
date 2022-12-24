import {Row, Container} from "react-bootstrap";
import axios from 'axios'
import { useEffect, useState } from 'react'

async function getWord(){
  
}

function DefSubmitPage(props){

  const [word, setWord] = useState('')
  const [def, setDef] = useState('')

  useEffect(()=>{

    axios.get('/getWord/')
    .then((response)=>{
      console.log(response.data)
      setWord(response.data['word'])
      setDef(response.data['definition'])
      }
    )
  }, [])
  

    return(
        <Container fluid>
            <Row>
              <p> Word: {word}</p>
            </Row>
            <Row>
              <p> Definition: {def}</p>
            </Row>
        </Container>
    )
}

export default DefSubmitPage;