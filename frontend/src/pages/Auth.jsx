import { useState } from 'react'
import { Col, Button, Row, Container, Card} from "react-bootstrap";
import axios from 'axios'


function AuthPage(props){
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [fName, setFName] = useState('')
    const [lName, setLName] = useState('')
    const [jobTitle, setJobTitle] = useState('')
    const [edLvl, setEdLvl] = useState('0')
    let [authMode, setAuthMode] = useState("signin")

  // Allows for the switching of forms between login and signup
  function changeAuthMode(){
    setAuthMode(authMode === "signin" ? "signup" : "signin")
  }

  // Transmits the signup information to the django backend. 
  async function signUp(){
    event.preventDefault()
    let myResponse = await axios
      .post('/signup/',{'email':email, 'password':password, 'fName':fName, 'lName': lName, 'jobTitle':jobTitle, 'edLvl': edLvl})
    console.log(myResponse.data)
    if(myResponse.data['signUp']==true){
      window.location.href="/#/signIn"
    }
    else{
      alert("incorrect input")
      window.location.reload()
    }
  }
  
  // Transmits the login information to the django backend and links to the homepage on success. 
  async function logIn(){
    event.preventDefault()
    let myResponse = await axios
      .post('/signin/',{'email':email, 'password':password})
    console.log(myResponse)
    if (myResponse.data["signIn"]==true){
      window.location.href="/"
    }
    else{
        alert("Incorrect input")
        window.location.reload()
    }
  }

  function handleEdLvl(event){
    setEdLvl(event.target.value)
  }

  // Login card.
  if (authMode === "signin") {
    return (
      <div className="Auth-form-container">
        <form className="Auth-form">
          <div className="Auth-form-content">
            <h3 className="Auth-form-title">Sign In</h3>
            <div className="text-center">
              Not registered yet?{" "}
              <span className="link-primary" onClick={changeAuthMode}>
                Sign Up
              </span>
            </div>
            <div className="form-group mt-3">
              <label>Email address</label>
              <input
                type="email"
                className="form-control mt-1"
                placeholder="Enter email"
                onChange={(event)=>{setEmail(event.target.value)}}
              />
            </div>
            <div className="form-group mt-3">
              <label>Password</label>
              <input
                type="password"
                className="form-control mt-1"
                placeholder="Enter password"
                onChange={(event)=>{setPassword(event.target.value)}}
              />
            </div>
            <div className="d-grid gap-2 mt-3">
              <button type="submit" className="btn btn-primary" onClick={()=>{logIn()}}>
                Log in!
              </button>
            </div>
          </div>
        </form>
      </div>
    )
  }

  // Signup card.
  return (
    <div className="Auth-form-container">
      <form className="Auth-form">
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Sign Up</h3>
          <div className="text-center">
            Already registered?{" "}
            <span className="link-primary" onClick={changeAuthMode}>
              Sign In
            </span>
          </div>
          <div className="form-group mt-3">
            <label>First Name</label>
            <input
              type="firstname"
              className="form-control mt-1"
              onChange={(event)=>{setFName(event.target.value)}}
            />
          </div>
          <div className="form-group mt-3">
            <label>Last Name</label>
            <input
              type="lastname"
              className="form-control mt-1"
              onChange={(event)=>{setLName(event.target.value)}}
            />
          </div>
          <div className="form-group mt-3">
            <label>Email address</label>
            <input
              type="email"
              className="form-control mt-1"
              onChange={(event)=>{setEmail(event.target.value)}}
            />
          </div>
          <div className="form-group mt-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control mt-1"
              onChange={(event)=>{setPassword(event.target.value)}}
            />
          </div>
          <div className="form-group mt-3">
            <label>Job Title</label>
            <input
              type="jobtitle"
              className="form-control mt-1"
              placeholder="e.g. teacher, manager, lawyer"
              onChange={(event)=>{setJobTitle(event.target.value)}}
            />
          </div>
          <div className="form-group mt-3">
            <label>Highest Level of Education</label>
            <select
              value={edLvl}
              onChange={(event)=>(handleEdLvl(event))} 
              className="form-control mt-1"
            >
              <option value='0'>Some high school</option>
              <option value='1'>High school graduate</option>
              <option value='2'>Some college</option>
              <option value='3'>Associate's degree</option>
              <option value='4'>Bachelor's degree</option>
              <option value='5'>Master's degree</option>
              <option value='6'>Professional degree other than J.D.</option>
              <option value='7'>J.D.</option>
              <option value='8'>PhD</option>
            </select>
          </div>
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary" onClick={()=>{signUp()}}>
              Register!
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default AuthPage;