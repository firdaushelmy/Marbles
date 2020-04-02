import React from "react";
import "./FAQ.css";
import { Accordion, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

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
              what is marbles?
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="0" className="answerCard">
              <Card.Body>Marbles was created by a team of coders leading a movement for mental health awareness. 1 in 4 people are diagnosed with mental illness in their lives and in Malaysia, mental disorders estimated to be responsible for about 8.6% of total DALYs. We hope that you continue to support us in our movement!</Card.Body>
            </Accordion.Collapse>
          </div>
        </Accordion>
        <Accordion className="Accordion">
          <div className="questionCardHeader">
            <Accordion.Toggle as={Card.Header} variant="link" eventKey="1" className="questionCard">
              where does the money go?
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="1" className="answerCard">
              <Card.Body>We are a not for profit organisation and do not subscribe to any advertisements or selling of data. We function by accepting grants and donations. If you like what we're doing please do consider supporting us <Link>here</Link>. Thank you!</Card.Body>
            </Accordion.Collapse>
          </div>
        </Accordion>
        <Accordion className="Accordion">
          <div className="questionCardHeader">
            <Accordion.Toggle as={Card.Header} variant="link" eventKey="1" className="questionCard">
              i need help where can i go?
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="1" className="answerCard">
              <Card.Body>If you're in need of support or know someone who does, you can follow this <Link tag={Link} to="/supportgroup">our support group page</Link>.</Card.Body>
            </Accordion.Collapse>
          </div>
        </Accordion>
        <Accordion className="Accordion">
          <div className="questionCardHeader">
            <Accordion.Toggle as={Card.Header} variant="link" eventKey="1" className="questionCard">
              is my data going to be protected?
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="1" className="answerCard">
              <Card.Body>Yes. Our top priority is the anonymity and safety of our users. You can read our privacy policy <Link tag={Link} to="/supportgroup">here</Link>.</Card.Body>
            </Accordion.Collapse>
          </div>
        </Accordion>
        <Accordion className="Accordion">
          <div className="questionCardHeader">
            <Accordion.Toggle as={Card.Header} variant="link" eventKey="1" className="questionCard">
              is my data going to be protected?
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="1" className="answerCard">
              <Card.Body>Yes. Our top priority is the anonymity and safety of our users. You can read our privacy policy <Link tag={Link} to="/supportgroup">here</Link>.</Card.Body>
            </Accordion.Collapse>
          </div>
        </Accordion>
      </div>
    </div >
  )
}

export default FAQ;