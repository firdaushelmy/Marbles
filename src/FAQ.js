import React from "react";
import "./FAQ.css";
import { Accordion, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import styled, { ThemeProvider, keyframes, withTheme } from 'styled-components';

function FAQ() {
  const FaqPinkDiv = styled.div`
    background-color: ${props => props.theme.emergencyPinkDivBg};
  `;

  FaqPinkDiv.defaultProps = {
    theme: {
      emergencyPinkDivBg: "rgb(250, 229, 223)"
    }
  };

  const QuestionCardHeader = styled.div`
    border: 2px solid ${props => props.theme.questionCardHeaderBorder};
  `

  QuestionCardHeader.defaultProps = {
    theme: {
      questionCardHeaderBorder: "#FBD6C8"
    }
  }

  const AnswerCard = styled(Card.Body)`
    background-color: ${props => props.theme.answerCardBg}
  `;

  AnswerCard.defaultProps = {
    theme: {
      answerCardBg: "#FBD6C8"
    }
  }

  return (
    <div className="faqDiv">
      <FaqPinkDiv className="faqPinkDiv">
        <h6>frequently asked questions</h6>
      </FaqPinkDiv>
      <div className="container" id="faqAccordionDiv">
        <Accordion className="accordion">
          <QuestionCardHeader className="questionCardHeader">
            <Accordion.Toggle as={Card.Header} variant="link" eventKey="0" className="questionCard">
              what is marbles?
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="0" className="answerCard">
              <AnswerCard>Marbles was created by a team of coders leading a movement for mental health awareness. 1 in 4 people are diagnosed with mental illness in their lives and in Malaysia, mental disorders estimated to be responsible for about 8.6% of total DALYs. We hope that you continue to support us in our movement!</AnswerCard>
            </Accordion.Collapse>
          </QuestionCardHeader>
        </Accordion>
        <Accordion className="Accordion">
          <QuestionCardHeader className="questionCardHeader">
            <Accordion.Toggle as={Card.Header} variant="link" eventKey="1" className="questionCard">
              where does the money go?
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="1" className="answerCard">
              <AnswerCard>We are a not for profit organisation and do not subscribe to any advertisements or selling of data. We function by accepting grants and donations. If you like what we're doing please do consider supporting us <Link>here</Link>. Thank you!</AnswerCard>
            </Accordion.Collapse>
          </QuestionCardHeader>
        </Accordion>
        <Accordion className="Accordion">
          <QuestionCardHeader className="questionCardHeader">
            <Accordion.Toggle as={Card.Header} variant="link" eventKey="1" className="questionCard">
              i need help where can i go?
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="1" className="answerCard">
              <AnswerCard>If you're in need of support or know someone who does, you can follow this <Link tag={Link} to="/supportgroup">our support group page</Link>.</AnswerCard>
            </Accordion.Collapse>
          </QuestionCardHeader>
        </Accordion>
        <Accordion className="Accordion">
          <QuestionCardHeader className="questionCardHeader">
            <Accordion.Toggle as={Card.Header} variant="link" eventKey="1" className="questionCard">
              is my data going to be protected?
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="1" className="answerCard">
              <AnswerCard>Yes. Our top priority is the anonymity and safety of our users. You can read our privacy policy <Link tag={Link} to="/supportgroup">here</Link>.</AnswerCard>
            </Accordion.Collapse>
          </QuestionCardHeader>
        </Accordion>
        <Accordion className="Accordion">
          <QuestionCardHeader className="questionCardHeader">
            <Accordion.Toggle as={Card.Header} variant="link" eventKey="1" className="questionCard">
              is my data going to be protected?
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="1" className="answerCard">
              <AnswerCard>Yes. Our top priority is the anonymity and safety of our users. You can read our privacy policy <Link tag={Link} to="/supportgroup">here</Link>.</AnswerCard>
            </Accordion.Collapse>
          </QuestionCardHeader>
        </Accordion>
      </div>
    </div >
  )
}

export default FAQ;