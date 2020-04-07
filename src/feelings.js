import React, { useState, useEffect, useCallback } from "react";
import "./feelings.css";
import { Link } from "react-router-dom";
import DelayLink from "./DelayLink.js";
import styled, { ThemeProvider, keyframes, withTheme } from 'styled-components';


function Feelings(props) {
  const { theme, setTheme, depressedTheme, defaultTheme, angryTheme, worriedTheme, reflectiveTheme, otherTheme, DepressedColorScheme } = props

  const DefaultColorScheme = () => {
    setTheme(defaultTheme)
  };
  const AngryColorScheme = () => {
    setTheme(angryTheme)
  };

  const WorriedColorScheme = () => {
    setTheme(worriedTheme)
  }

  const ReflectiveColorScheme = () => {
    setTheme(reflectiveTheme)
  }

  const OtherColorScheme = () => {
    setTheme(otherTheme)
  }

  const HowYouDoinDiv = styled.div`
    color: ${props => props.theme.howYouDoinDivCol};
  `

  HowYouDoinDiv.defaultProps = {
    theme: {
      howYouDoinDivCol: "rgb(241, 93, 38)"
    }
  }

  const FeelingDelayLink = styled(Link)`
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
              <FeelingDelayLink tag={Link} to="" className="feelingType" onClick={DepressedColorScheme}>
                Depressed</FeelingDelayLink>
            </EmotionDiv>
          </div>
          <div className="col-md-4 col-sm-6 col-xs-6">
            <EmotionDiv className="emotion" id="angry" onClick={AngryColorScheme}>
              <FeelingDelayLink delay="1000" tag={Link} to="/home" className="feelingType">Angry</FeelingDelayLink>
            </EmotionDiv>
          </div>
          <div className="col-md-4 col-sm-6 col-xs-6">
            <EmotionDiv className="emotion" id="heartbroken" onClick={DefaultColorScheme}>
              <FeelingDelayLink delay="1000" tag={Link} to="/home" className="feelingType">Heartbroken</FeelingDelayLink>
            </EmotionDiv>
          </div>
        </div>
        {/* <div className="col-lg-6 col-md-12 col-sm-12 d-flex"> */}
        <div className="container-fluid row justify-content-center align-items-center">
          <div className="col-md-4 col-sm-6 col-xs-6">
            <EmotionDiv className="emotion" id="worried" onClick={WorriedColorScheme}>
              <FeelingDelayLink delay="1000" tag={Link} to="/home" className="feelingType">Worried</FeelingDelayLink>
            </EmotionDiv>
          </div>
          <div className="col-md-4 col-sm-6 col-xs-6">
            <EmotionDiv className="emotion" id="reflective" onClick={ReflectiveColorScheme}>
              <FeelingDelayLink delay="1000" tag={Link} to="/home" className="feelingType">Reflective</FeelingDelayLink>
            </EmotionDiv>
          </div>
          <div className="col-md-4 col-sm-6 col-xs-6">
            <EmotionDiv className="emotion" id="other" onClick={OtherColorScheme}>
              <FeelingDelayLink delay="1000" tag={Link} to="/home" className="feelingType">Other</FeelingDelayLink>
            </EmotionDiv>
          </div>
        </div>
      </div>
    </>
  )
}

export default Feelings;