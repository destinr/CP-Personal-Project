import {Row, Container} from "react-bootstrap";
import axios from 'axios'
import { useEffect, useState } from 'react'


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
              <p> Word: {word}</p>
            </Row>
            <Row>
            <label>Submit your definition (placeholder text is an Oxford dicitionary definition)</label>
              <input
                type="user definition"
                className="form-control mt-1"
                placeholder={oDef}
                onChange={(event)=>{setUserDef(event.target.value)}}
              />
              <button type="submit" className="btn btn-primary" onClick={()=>{sendDef()}}>
              Submit definition!
            </button>
            </Row>
        </Container>
    )
}

export default DefSubmitPage;