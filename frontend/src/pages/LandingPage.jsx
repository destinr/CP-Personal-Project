import axios from 'axios'

function LandingPage(){
    
    function whoAmI(){
        axios
        .get('/currentuser')
        .then((response) => {
          console.log(response.data)
        })
      }
    
    function logOut(){
        axios
        .post('/logout/')
        .then((response) => {
          console.log(response.data)
          window.location.reload()
        })
      }


    return(
        <div>
            <button type="submit" className="btn btn-primary" onClick={()=>{whoAmI()}}>
              Who am I?
            </button>
            <button type="submit" className="btn btn-primary" onClick={()=>{logOut()}}>
              Logout
            </button>
        </div>

    )
}

export default LandingPage