import React from "react";
import "./feelings.css";
import { Link } from "react-router-dom";
import DelayLink from "./DelayLink.js";
import styled, { ThemeProvider, keyframes, withTheme } from 'styled-components';



function Feelings() {
  const HowYouDoinDiv = styled.div`
    color: ${props => props.theme.howYouDoinDivCol};
  `

  HowYouDoinDiv.defaultProps = {
    theme: {
      howYouDoinDivCol: "rgb(241, 93, 38)"
    }
  }

  const FeelingDelayLink = styled(DelayLink)`
  color: ${props => props.theme.delayLinkCol}
  `;

  FeelingDelayLink.defaultProps = {
    theme: {
      delayLinkCol: "coral"
    }
  }

  const EmotionDiv = styled.div`
    border-color: ${props => props.theme.emotionDivBorderCol};
  `;

  EmotionDiv.defaultProps = {
    theme: {
      emotionDivBorderCol: "rgb(247, 154, 120)"
    }
  }

  return (
    <>
      <HowYouDoinDiv className="howYouDoin">
        <p>How are you feeling today?</p>
      </HowYouDoinDiv>
      <div className="emotionBar">
        <div className="container-fluid row justify-content-center align-items-center">
          {/* <div className="col-lg-6 col-md-12 col-sm-12 d-flex"> */}
          <div className="col-md-4 col-sm-6 col-xs-6">
            <EmotionDiv className="emotion" id="depressed">
              <FeelingDelayLink delay="1000" tag={Link} to="/home" className="feelingType">
                Depressed</FeelingDelayLink>
            </EmotionDiv>
          </div>
          <div className="col-md-4 col-sm-6 col-xs-6">
            <EmotionDiv className="emotion" id="angry">
              <FeelingDelayLink delay="1000" tag={Link} to="/home" className="feelingType">Angry</FeelingDelayLink>
            </EmotionDiv>
          </div>
          <div className="col-md-4 col-sm-6 col-xs-6">
            <EmotionDiv className="emotion" id="heartbroken">
              <FeelingDelayLink delay="1000" tag={Link} to="/home" className="feelingType">Heartbroken</FeelingDelayLink>
            </EmotionDiv>
          </div>
        </div>
        {/* <div className="col-lg-6 col-md-12 col-sm-12 d-flex"> */}
        <div className="container-fluid row justify-content-center align-items-center">
          <div className="col-md-4 col-sm-6 col-xs-6">
            <EmotionDiv className="emotion" id="worried">
              <FeelingDelayLink delay="1000" tag={Link} to="/home" className="feelingType">Worried</FeelingDelayLink>
            </EmotionDiv>
          </div>
          <div className="col-md-4 col-sm-6 col-xs-6">
            <EmotionDiv className="emotion" id="reflective">
              <FeelingDelayLink delay="1000" tag={Link} to="/home" className="feelingType">Reflective</FeelingDelayLink>
            </EmotionDiv>
          </div>
          <div className="col-md-4 col-sm-6 col-xs-6">
            <EmotionDiv className="emotion" id="other">
              <FeelingDelayLink delay="1000" tag={Link} to="/home" className="feelingType">Other</FeelingDelayLink>
            </EmotionDiv>
          </div>
        </div>
      </div>
    </>
  )
}

export default Feelings;