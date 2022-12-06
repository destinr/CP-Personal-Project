import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'

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

  axios
  .get('/whoami')
  .then((response) => {
    console.log(response.data)
  })
  
  

  return (
    <div>

      <p className="hello world">
        Hello World
      </p>

    </div>
  )
}

export default App
