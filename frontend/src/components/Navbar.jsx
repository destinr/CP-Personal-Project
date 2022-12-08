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
  return (
    <Navbar fixed="top" fluid bg="light">
    <Container>
    <Navbar.Brand href="/">
            <img
              alt=""
              src={AppLogo}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />
            Plain meaning?
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="/">Home</Nav.Link>
        </Nav>
        {props.user &&
          <Nav className="ms-auto">
            <Nav.Link  href="/#/user">User: {props.user.email}</Nav.Link> 
            <Nav.Link  class='text-warning' to="/" onClick={()=>logOut()}><p class='text-danger'>Logout</p></Nav.Link> 
          </Nav>
        }
        {!props.user && <Nav.Link  href="/#/auth">Log In/Sign Up</Nav.Link>}
      </Navbar.Collapse>
    </Container>
  </Navbar>
  );
}

export default AppNav;