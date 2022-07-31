import { useLocation } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';

function NoMatch() {
    let location = useLocation();
    return (
        <Container fluid>
            <Container>
                <Row>
                    <Col>
                        <h1 className="text-danger"><code>{location.pathname}</code> not found!</h1>
                    </Col>
                </Row>
            </Container>
        </Container>
        
    );
}


export default NoMatch;