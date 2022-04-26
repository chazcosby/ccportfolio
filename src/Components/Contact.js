import React from "react";
import { Row, Col, Container, Button } from "react-bootstrap";

function Contact() {
  return (
    <div className="contactBG">
      <Container className="contact" id="contact" fluid>
        <Row>
          <Col>
            <center>
              <h3>Contact</h3>
            </center>
          </Col>
        </Row>
        <Row>
          <Col>
            <form
              class="form-control"
              action="mailto:chaz.cosby@gmail.com"
              method="GET"
              target="_blank"
            >
              <h4>Name *</h4>
              <li>
                <input required="true" name="name" id="name_id" type="text" />
              </li>
              <h4>Email *</h4>
              <li>
                <input required="true" name="email" id="email_id" />
              </li>
              <h4>Message *</h4>
              <li>
                <textarea
                  required="true"
                  name="message"
                  id="message_id"
                ></textarea>
              </li>
              <Button className="submit">Send Message</Button>
            </form>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Contact;
