import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'

import {HashRouter as Router, Routes, Route} from "react-router-dom";
import AppNav from './components/Navbar.jsx';
import AuthPage from './pages/Auth.jsx';
import LandingPage from './pages/LandingPage.jsx';
import UserPage from './pages/UserPage.jsx';

function App() {

  // allows frontend to track that user is logged in and gives access to user information.
  const [user, setUser] = useState(null)


  // getCookie manages the CSRF Token information and ensures that Axios requests to the Django backend include the necesarry CSRF token.
  function getCookie(name) {
    let cookieValue = null;
    if (document.cookie && document.cookie !== '') {
        const cookies = document.cookie.split(';');
        for (let i = 0; i < cookies.length; i++) {
            const cookie = cookies[i].trim();
            // Does this cookie string begin with the name we want?
            if (cookie.substring(0, name.length + 1) === (name + '=')) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    return cookieValue;
  }
  const csrftoken = getCookie('csrftoken');
  axios.defaults.headers.common["X-CSRFToken"]=csrftoken

  // Requests logged in user data from Django backend.
  async function curr_user(){
    let myResponse=await axios.get('currentuser/')
    let user= myResponse.data && myResponse.data[0] && myResponse.data[0].fields
    setUser(user)
  }
  
  // Pulls current user data if available
  useEffect(()=>{
    curr_user()
  },[])

  
  // Create webpage
  return (
    <div>

      <AppNav user = {user}/>

      <Router>
        <Routes>
          <Route path='' element={<LandingPage user={user}/>}/>
          <Route path='/auth' element={<AuthPage/>}/>
          <Route path='/user' element={<UserPage user={user}/>}/>
        </Routes>
      </Router>

    </div>
  )
}

export default App
