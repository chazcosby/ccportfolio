import React from 'react';
import { Row, Col, Container, Button } from 'react-bootstrap';
import { Link } from "react-router-dom";


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
          </Col>
          <Row>
            <Col className="heroBannerIcons" xs={12} md={10} lg={7}>
              <a href="https://github.com/chazcosby/">
                <i className="fa-brands fa-github fa-2xl iconSpin" /> &nbsp;
              </a>
              <a href="https://www.linkedin.com/in/chazcosby/">
                <i className="fa-brands fa-linkedin fa-2xl iconSpin" /> &nbsp;
              </a>
              <a href="https://www.facebook.com/chaz.cosby">
                <i className="fa-brands fa-facebook fa-2xl iconSpin" /> &nbsp;
              </a>

              

              <a
                href="https://docs.google.com/document/d/1mgpEZsCp7hT_dH4410gaV5NtiI9q5iRof4oy1QfjrvQ/edit?usp=sharing"
                target="_blank"
              >
                <Button className="heroButton">View Resume</Button>
              </a>
            </Col>
          </Row>
        </Row>
      </Container>
    </div>
  );
}

export default HeroBanner