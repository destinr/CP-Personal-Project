import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import AppLogo from '../assets/book.svg'
import axios from 'axios'


function logOut(){
  axios
  .post('/logout/')
  .then((response) => {
    console.log(response.data)
    window.location.reload()
  })
}

function AppNav(props) {
  
  if(props.user){
    return (
      <Navbar fixed='top' bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="/">
            <img
              alt=""
              src={AppLogo}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />
              <i> Plain Meaning?</i>
            </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/#/SubmitDefinitions">Submit Definitions</Nav.Link>
            </Nav>
            <Nav className="justify-content-end">
              <Nav.Link href='/#/userpage'>User: {props.user.email}</Nav.Link> 
              <Nav.Link to="/" onClick={()=>logOut()}>Logout</Nav.Link> 
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }

  else{
    return(
      <Navbar fixed='top' bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="/">
            <img
              alt=""
              src={AppLogo}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />
              <i>Plain Meaning?</i>
            </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className=" me-auto">
              <Nav.Link href="/">Home</Nav.Link>
            </Nav>
            <Nav className="justify-content-end">
              <Nav.Link  href="/#/auth">Log In/Sign Up</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
};

export default AppNav;
