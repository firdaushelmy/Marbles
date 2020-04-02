import React from "react";
import "./feelings.css";
import { Link } from "react-router-dom";
import DelayLink from "./DelayLink.js";



function Feelings() {
  return (
    <>
      <div className="howYouDoin">
        <p>How are you feeling today?</p>
      </div>
      <div className="emotionBar">
        <div className="container-fluid row justify-content-center align-items-center">
          {/* <div className="col-lg-6 col-md-12 col-sm-12 d-flex"> */}
          <div className="col-md-4 col-sm-6 col-xs-6">
            <div className="emotion" id="depressed">
              <DelayLink delay="1000" tag={Link} to="/home" className="feelingType">
                Depressed</DelayLink>
            </div>
          </div>
          <div className="col-md-4 col-sm-6 col-xs-6">
            <div className="emotion" id="angry">
              <DelayLink delay="1000" tag={Link} to="/home" className="feelingType">Angry</DelayLink>
            </div>
          </div>
          <div className="col-md-4 col-sm-6 col-xs-6">
            <div className="emotion" id="heartbroken">
              <DelayLink delay="1000" tag={Link} to="/home" className="feelingType">Heartbroken</DelayLink>
            </div>
          </div>
        </div>
        {/* <div className="col-lg-6 col-md-12 col-sm-12 d-flex"> */}
        <div className="container-fluid row justify-content-center align-items-center">
          <div className="col-md-4 col-sm-6 col-xs-6">
            <div className="emotion" id="worried">
              <DelayLink delay="1000" tag={Link} to="/home" className="feelingType">Worried</DelayLink>
            </div>
          </div>
          <div className="col-md-4 col-sm-6 col-xs-6">
            <div className="emotion" id="reflective">
              <DelayLink delay="1000" tag={Link} to="/home" className="feelingType">Reflective</DelayLink>
            </div>
          </div>
          <div className="col-md-4 col-sm-6 col-xs-6">
            <div className="emotion" id="other">
              <DelayLink delay="1000" tag={Link} to="/home" className="feelingType">Other</DelayLink>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Feelings;