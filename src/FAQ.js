import React from "react";
import "./FAQ.css";
import { Accordion, Card, Button } from "react-bootstrap"

function FAQ() {
  return (
    <div className="container" id="FaqDiv">
      <div className="FaqPinkDiv">
        <h6>frequently asked questions</h6>
      </div>
      <Accordion defaultActiveKey="0">
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="0">
              question 1
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="0">
            <Card.Body>answer 1</Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    </div>
  )
}

export default FAQ;