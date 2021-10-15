import '../App.css';

import React from "react";
import {
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch
} from "react-router-dom";
import { Container, Row, Col, Nav } from 'react-bootstrap';
import Staff from './Staff';

function About() {
    let { path, url } = useRouteMatch();
  return (
        <Container className="py-3">
            <Row>
                <h2>About Us</h2>
                <Col sm={2}>
                    
                    <Nav defaultActiveKey="/about" className="flex-column">
                        <Nav.Link eventKey="link-1" as={Link} to={`${url}/about-us`} >About Us</Nav.Link>
                        <Nav.Link eventKey="link-2" as={Link} to={`${url}/employees`} >Employees</Nav.Link>
                        <Nav.Link eventKey="link-3" as={Link} to={`${url}/staff`} >Our Staff</Nav.Link>
                        <Nav.Link eventKey="disabled" disabled>
                            Disabled
                        </Nav.Link>
                    </Nav>
                </Col>
                <Col sm={10}>
                    <Switch>
                        <Route exact path={path}>
                            <h3>Please select a topic.</h3>
                        </Route>
                        <Route path={`${path}/staff`}>
                            <Staff />
                        </Route>
                        <Route path={`${path}/:topicId`}>
                            <Topic />
                        </Route>
                    </Switch>
                </Col>
            </Row>
        </Container>
  );
}

function Topic() {
    // The <Route> that rendered this component has a
    // path of `/topics/:topicId`. The `:topicId` portion
    // of the URL indicates a placeholder that we can
    // get from `useParams()`.
    let { topicId } = useParams();
  
    return (
      <div>
        <h3>{topicId}</h3>
      </div>
    );
  }

export default About;