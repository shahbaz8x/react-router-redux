import { Container, Row, Col, Card, ListGroup } from 'react-bootstrap';
import ControlledCarousel from '../components/ControlledCarousel';

function Home(props) {
    console.log("props",props.data);
    return (
        <Container className="bg-light py-3" fluid>
            <Container>
                <Row>
                    <Col className="text-center">
                        <h3>Welcome to Aayesha Enterprise</h3>
                        
                        <button onClick={()=>props.addToCartHandler({price:'1200',name:'Iphone'})}>Add to Cart</button>
                        <button onClick={()=>props.removeToCartHandler()}>Remove to Cart</button>
                    </Col>
                </Row>
                <Row>
                    <Col sm={8}>
                        <ControlledCarousel />
                    </Col>
                    <Col sm={4}>
                        <Card style={{ width: '18rem' }}>
                            <Card.Header>Featured</Card.Header>
                            <ListGroup variant="flush">
                                <ListGroup.Item>Cras justo odio</ListGroup.Item>
                                <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                                <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
                            </ListGroup>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </Container>
    );
}


export default Home;