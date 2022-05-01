import React from 'react'
import { Row, Col, Container } from "react-bootstrap";



function Skills() {
  return (
    <div>
      <Container>
        <Row>
          <Col className="skills">
            <center>
            
              <h3>Skills</h3>
            </center>
          </Col>
        </Row>
        <Row>
          <Col className="center">
            <i class="fa-brands fa-node fa-2x techIcons" title="NodeJS"></i>
            <i class="fa-brands fa-js fa-2x techIcons" title="JavaScript"></i>
            <i class="fa-brands fa-html5 fa-2x techIcons" title="HTML"></i>
            <i class="fa-brands fa-css3-alt fa-2x techIcons" title="CSS"></i>
            <i class="fa-brands fa-react fa-2x techIcons" title="ReactJS"></i>
            <i
              class="fa-brands fa-github-square fa-2x techIcons"
              title="Github"
            ></i>
            <i
              class="fa-brands fa-bootstrap fa-2x techIcons"
              title="Bootstrap"
            ></i>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Skills