import React from "react";
import "./feelings.css";
import { Link } from "react-router-dom";
import DelayLink from "./DelayLink.js"

function Feelings() {
  return (
    <>
      <div className="HowYouDoin">
        <p>How are you feeling today?</p>
      </div>
      <div className="EmotionBar">
        <div className="container-fluid row justify-content-center align-items-center">
          {/* <div className="col-lg-6 col-md-12 col-sm-12 d-flex"> */}
          <div className="col-md-4 col-sm-6 col-xs-6">
            <div className="Emotion">
              <DelayLink delay="1000" tag={Link} to="/home" className="FeelingType">
                Depressed</DelayLink>
            </div>
          </div>
          <div className="col-md-4 col-sm-6 col-xs-6">
            <div className="Emotion">
              <DelayLink delay="1000" tag={Link} to="/home" className="FeelingType">Angry</DelayLink>
            </div>
          </div>
          <div className="col-md-4 col-sm-6 col-xs-6">
            <div className="Emotion">
              <DelayLink delay="1000" tag={Link} to="/home" className="FeelingType">Heartbroken</DelayLink>
            </div>
          </div>
        </div>
        {/* <div className="col-lg-6 col-md-12 col-sm-12 d-flex"> */}
        <div className="container-fluid row justify-content-center align-items-center">
          <div className="col-md-4 col-sm-6 col-xs-6">
            <div className="Emotion" id="Worried">
              <DelayLink delay="1000" tag={Link} to="/home" className="FeelingType">Worried</DelayLink>
            </div>
          </div>
          <div className="col-md-4 col-sm-6 col-xs-6">
            <div className="Emotion" id="Reflective">
              <DelayLink delay="1000" tag={Link} to="/home" className="FeelingType">Reflective</DelayLink>
            </div>
          </div>
          <div className="col-md-4 col-sm-6 col-xs-6">
            <div className="Emotion" id="Other">
              <DelayLink delay="1000" tag={Link} to="/home" className="FeelingType">Other</DelayLink>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Feelings;