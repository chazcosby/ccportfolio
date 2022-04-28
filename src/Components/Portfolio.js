import React from "react";
import { Row, Col, Container, Button } from "react-bootstrap";
import pic1 from "../Assets/news-app-img.png";
import pic2 from "../Assets/weather-app-img.png";

function Portfolio() {
  return (
    <div>
      <Container className="portfolio center" id="portfolio" fluid>
        <Row>
          <Col>
            <center>
              <h3>Portfolio</h3>
            </center>
          </Col>
        </Row>
        <Row className="center">
          <Col className="center" sm={10} md={3}>
            <p>
              <a href={pic1}>
                <img src={pic1} alt="Coming Soon" height="150" />
              </a>
            </p>
            <p className="portfolioPar">
              <Button
                href="https://github.com/chazcosby/news-app"
                target="_blank"
                variant="primary"
              >
                Code
              </Button>
            </p>
            <p>
              A website using NewsAPI to get various sources and each source can
              provide major headlines in multiple categories. Built with HTML,
              CSS, ReactJS and Bootstrap.
            </p>
          </Col>
          <Col className="center" sm={10} md={3}>
            <p>
              <a href={pic2}>
                <img src={pic2} alt="Coming Soon" height="150" />
              </a>
            </p>
            <p className="portfolioPar">
              <Button
                href="https://github.com/chazcosby/weather-app"
                target="_blank"
                variant="primary"
              >
                Code
              </Button>

              <Button
                href="https://chazcosby.github.io/weather-app/"
                target="_blank"
                variant="success"
              >
                Live
              </Button>
            </p>
            <p>
              An app using OpenWeather API to grab the users location and return
              the current and 5 day weather forecast. Built with Html, Css,
              ReactJS, and Bootstrap.
            </p>
          </Col>
          <Col className="center" sm={10} md={3}>
            <p>
              <a href={pic1}>
                <img src={pic1} alt="Coming Soon" height="150" />
              </a>
            </p>
            <p className="portfolioPar">
              <Button href="" target="_blank" variant="primary">
                Code
              </Button>

              <Button href="" target="_blank" variant="success">
                Live
              </Button>
            </p>
            <p>
              A website using NewsAPI to get various sources and each source can
              provide major headlines in multiple categories. Built with HTML,
              CSS, ReactJS and Bootstrap.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Portfolio;
