import '../App.css';
import { Container, Row, Col, Breadcrumb, Form, Button } from 'react-bootstrap';

function Contact() {
  return (
    <Container className="py-3">
      <Breadcrumb className="bg-light" style={{borderRadius: '.25rem', padding: '.75rem'}}>
        <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
        <Breadcrumb.Item href="/about">
          About
        </Breadcrumb.Item>
        <Breadcrumb.Item active>Contact</Breadcrumb.Item>
      </Breadcrumb>

      <Row>
        <Col sm={6}>
          Address: Webel IT Park, Asansol - 713305<br />
          Contact at: aayesha.com@gmail.com
        </Col>
        <Col sm={6}>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="Name" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicMessage">
              <Form.Label>Message</Form.Label>
              <Form.Control type="text" placeholder="Message" />
            </Form.Group>          
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default Contact;
