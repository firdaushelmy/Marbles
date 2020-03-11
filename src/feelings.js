import React from "react";
import "./feelings.css"

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
              <a href="#">
                Depressed</a>
            </div>
          </div>
          <div className="col-md-4 col-sm-6 col-xs-6">
            <div className="Emotion">
              <a href="#">Anxious</a>
            </div>
          </div>
          <div className="col-md-4 col-sm-6 col-xs-6">
            <div className="Emotion">
              <a href="#">Heartbroken</a>
            </div>
          </div>
        </div>
        {/* <div className="col-lg-6 col-md-12 col-sm-12 d-flex"> */}
        <div className="container-fluid row justify-content-center align-items-center">
          <div className="col-md-4 col-sm-6 col-xs-6">
            <div className="Emotion" id="Worried">
              <a href="#">Worried</a>
            </div>
          </div>
          <div className="col-md-4 col-sm-6 col-xs-6">
            <div className="Emotion" id="Reflective">
              <a href="#">Reflective</a>
            </div>
          </div>
          <div className="col-md-4 col-sm-6 col-xs-6">
            <div className="Emotion" id="Other">
              <a href="#">Other</a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Feelings;