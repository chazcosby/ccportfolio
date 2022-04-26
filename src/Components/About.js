import React from 'react';
import { Row, Col, Container } from "react-bootstrap";
import pic from "../ProfilePic.png";


function About() {
  return (
    <div className="aboutBG">
      <Container className="about" id="about">
        <Row>
          <Col className="title">
            <center>
              <h3>About</h3>
            </center>
          </Col>
        </Row>
        <Row>
          <Col sm={10} md={5}>
            <center>
              <img src={pic} height="230px" />
            </center>
          </Col>
          <Col className="aboutText">
            <p>
              I am a front end developer proficient in HTML, CSS, and ReactJS. I
              have seven years of experience in team management, research, and
              investigation. I also have a strong background in customer service
              and client relations. I am excited to pursue a position as a
              junior software developer and apply my skills in developing and
              maintaining web services.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default About