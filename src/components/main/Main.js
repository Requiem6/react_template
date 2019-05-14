import React,{Component} from 'react';
import style from "./Main.scss";
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button } from 'reactstrap';
import { ListGroup, ListGroupItem, Badge } from 'reactstrap';
import { Container, Row, Col } from 'reactstrap';

    class Main extends Component{
        render(){
            return( 
                    <Container-fluid>
                        <Row>
                   
                        <Col md="8">
                        <Row>
                    <div id="main" className="col-md-3"> 
      <Card>
        <CardImg top width="100%" src="https://vignette.wikia.nocookie.net/play-rust/images/0/0e/Anti-Radiation_Pills_icon.png/revision/latest?cb=20151106060926" alt="Card image cap" />
        <CardBody>
          <CardTitle>Card title</CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
          <Button>Button</Button>
        </CardBody>
      </Card>
    </div>

    <div id="main" className="col-md-3">
      <Card>
        <CardImg top width="100%" src="https://vignette.wikia.nocookie.net/play-rust/images/0/0e/Anti-Radiation_Pills_icon.png/revision/latest?cb=20151106060926" alt="Card image cap" />
        <CardBody>
          <CardTitle>Card title</CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
          <Button>Button</Button>
        </CardBody>
      </Card>
    </div>


    <div id="main" className="col-md-3">
      <Card>
        <CardImg top width="100%" src="https://vignette.wikia.nocookie.net/play-rust/images/0/0e/Anti-Radiation_Pills_icon.png/revision/latest?cb=20151106060926" alt="Card image cap" />
        <CardBody>
          <CardTitle>Card title</CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
          <Button>Button</Button>
        </CardBody>
      </Card>
    </div>

    <div id="main" className="col-md-3">
      <Card>
        <CardImg top width="100%" src="https://vignette.wikia.nocookie.net/play-rust/images/0/0e/Anti-Radiation_Pills_icon.png/revision/latest?cb=20151106060926" alt="Card image cap" />
        <CardBody>
          <CardTitle>Card title</CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
          <Button>Button</Button>
        </CardBody>
      </Card>
    </div>
    </Row>
 </Col>
    <Col md="4">

      <ListGroup>
        <ListGroupItem className="justify-content-between">Cras justo odio <Badge pill>14</Badge></ListGroupItem>
        <ListGroupItem className="justify-content-between">Dapibus ac facilisis in <Badge pill>2</Badge></ListGroupItem>
        <ListGroupItem className="justify-content-between">Morbi leo risus <Badge pill>1</Badge></ListGroupItem>
      </ListGroup>
      </Col>

                </Row>
        </Container-fluid>

                     
            )
        }
    }
    
    export default Main;