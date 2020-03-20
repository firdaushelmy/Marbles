import React from "react";
import "./FAQ.css";
import { Accordion, Card } from "react-bootstrap"

function FAQ() {
  return (
    <div className="FaqDiv">
      <div className="FaqPinkDiv">
        <h6>frequently asked questions</h6>
      </div>
      <div className="FaqAccordionDiv">
        <Accordion className="Accordion">
          <div className="QuestionCardHeader">
            <Accordion.Toggle as={Card.Header} variant="link" eventKey="0" className="QuestionCard">
              question 1
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="0" className="AnswerCard">
              <Card.Body>answer 1</Card.Body>
            </Accordion.Collapse>
          </div>
        </Accordion>
        <Accordion className="Accordion">
          <div className="QuestionCardHeader">
            <Accordion.Toggle as={Card.Header} variant="link" eventKey="1" className="QuestionCard">
              question 2
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="1" className="AnswerCard">
              <Card.Body>answer 2</Card.Body>
            </Accordion.Collapse>
          </div>
        </Accordion>
      </div>
    </div >
  )
}

export default FAQ;