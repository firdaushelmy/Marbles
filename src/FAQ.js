import React from "react";
import "./FAQ.css";
import { Accordion, Card } from "react-bootstrap"

function FAQ() {
  return (
    <div className="faqDiv">
      <div className="faqPinkDiv">
        <h6>frequently asked questions</h6>
      </div>
      <div className="container" id="faqAccordionDiv">
        <Accordion className="accordion">
          <div className="questionCardHeader">
            <Accordion.Toggle as={Card.Header} variant="link" eventKey="0" className="questionCard">
              question 1
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="0" className="answerCard">
              <Card.Body>answer 1</Card.Body>
            </Accordion.Collapse>
          </div>
        </Accordion>
        <Accordion className="Accordion">
          <div className="questionCardHeader">
            <Accordion.Toggle as={Card.Header} variant="link" eventKey="1" className="questionCard">
              question 2
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="1" className="answerCard">
              <Card.Body>answer 2</Card.Body>
            </Accordion.Collapse>
          </div>
        </Accordion>
      </div>
    </div >
  )
}

export default FAQ;