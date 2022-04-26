import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import pic1 from "../news-app-img.png";

function Portfolio() {
  return (
    <div>
      <Container className="portfolio" id="portfolio" fluid>
        <Row>
          <Col>
            <center>
              <h3>Portfolio</h3>
            </center>
          </Col>
        </Row>
        <Row className="portfolio-spacing justify-content-center centerText">
          <Col sm={10} md={6} lg={4}>
            <a href={pic1}>
              <img src={pic1} height="150" />
            </a>
          </Col>
          <Col className="portfolioPar">
            <p>
              Developed an app using NewsAPI to get various sources and each
              source can provide major headlines in multiple categories. Built
              with HTML, CSS, ReactJS and Bootstrap
            </p>
          </Col>
        </Row>
        <Row className="portfolio-spacing justify-content-center centerText">
          <Col sm={10} md={6} lg={4}>
            <a href="">
              <img src="" alt="Coming Soon" height="150" />
            </a>
          </Col>
          <Col className="portfolioPar">
            <p>Coming Soon </p>
          </Col>
        </Row>
        <Row className="portfolio-spacing justify-content-center centerText">
          <Col sm={10} md={6} lg={4}>
            <a href="">
              <img src="" alt="Coming Soon" height="150" />
            </a>
          </Col>
          <Col className="portfolioPar">
            <p>Coming Soon </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Portfolio;
