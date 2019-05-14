import React,{Component} from 'react';
import style from "./Header.scss";
import Navigation from "./navigation/Navigation"
import { Jumbotron, Container } from 'reactstrap';


class Header extends Component{
    render(){
        return(
            <div> <Navigation/> 
            
            <div class="head">
            <Jumbotron fluid>
              <Container fluid>
                <h1 className="display-3">Fluid jumbotron</h1>
                <p className="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
              </Container>
            </Jumbotron>
          </div>
          
          
          </div>
        )
    }
}

export default Header;