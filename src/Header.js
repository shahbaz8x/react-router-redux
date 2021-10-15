import { Container, Row, Col } from 'react-bootstrap';
import logo from './aestree_logo.png';

function Header() {

    return (
        <Container fluid>
            <Container className="pb-3">
                <Row>
                    <Col sm={3}>
                        <div className="text-center" style={{verticalAlign:'middle'}}>
                            <img className="mt-3" alt="No Logo" style={{width:80}} src={logo} />
                        </div>
                    </Col>
                    <Col sm={9}>
                        <div className="text-center">
                            <h1 className="agcsuktext" style={{fontFamily: 'olde_englishregular',fontSize: '45px',textShadow: '-1px 1px 3px #888888'}} >
                                Assembly of God Church School, Ukhra</h1>
                            <h6 style={{color: '#000', fontWeight: 'bold'}} >Affiliated to the Council of ISC Examination, New
                                Delhi, W.B. 131</h6>
                            <h6 style={{color: '#000', fontWeight: 'bold'}} >A Group of Schools under the registered body of the
                                Assembly of God Church, Asansol</h6>
                        </div>
                    </Col>
                </Row>
            </Container>
        </Container>
    );
}


export default Header;