import {Container, Row, Col,Button, Card} from "react-bootstrap";
import RecentWordsCard from '../components/RecentWordsCard.jsx'
import SiteInfoCard from '../components/SiteInfoCard.jsx'



function HomePage(props){
    if (props.user){
        return(
            <Container fluid>
              <Row>
                <h1> Welcome, {props.user.first_name}!</h1>
              </Row>
              <Row>
                <Col><SiteInfoCard/></Col> 
                <Col><RecentWordsCard user={props.user}/></Col>
              </Row>
          </Container>
            )
    }

    else{

        return(
            <Container fluid>
                <Row>
                <h1>Welcome to <i>Plain Meaning?</i></h1>
                </Row>
                <Row>
                <img className='.img-fluid' src="https://www.heritage.org/sites/default/files/styles/facebook_optimized/public/images/2017-11/iStock-543822084.jpg?itok=EhPXKcdi" alt="Card image"/>
                </Row>
            </Container>
        )
        
    }
}

export default HomePage;