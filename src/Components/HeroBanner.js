import React from 'react';
import { Row, Col, Container, Button } from 'react-bootstrap';


function HeroBanner() {
  return (
    <div>
     
      <Container className="heroBannerIMG heroBanner" fluid>
        <Row>
          <Col>
            <h3>Hello!</h3>
            <p>
              My name is Chaz. I am a Designer / Front End Developer based out
              of Nashville, TN
            </p>
          </Col>{" "}
          <Row>
            <Col xs={12} md={10} lg={7}>
              <i className="fa-brands fa-github fa-2xl iconSpin" /> &nbsp;
              <i className="fa-brands fa-linkedin fa-2xl iconSpin" /> &nbsp;
              <i className="fa-brands fa-facebook fa-2xl iconSpin" /> &nbsp;
              <Button className="heroButton">Download Resume</Button>
            </Col>
          </Row>
        </Row>
      </Container>
    </div>
  );
}

export default HeroBanner