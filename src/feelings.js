import React from "react";
import "./feelings.css";
import { Link } from "react-router-dom"

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
              <Link tag={Link} to="/home">
                Depressed</Link>
            </div>
          </div>
          <div className="col-md-4 col-sm-6 col-xs-6">
            <div className="Emotion">
              <Link tag={Link} to="/home">Anxious</Link>
            </div>
          </div>
          <div className="col-md-4 col-sm-6 col-xs-6">
            <div className="Emotion">
              <Link tag={Link} to="/home">Heartbroken</Link>
            </div>
          </div>
        </div>
        {/* <div className="col-lg-6 col-md-12 col-sm-12 d-flex"> */}
        <div className="container-fluid row justify-content-center align-items-center">
          <div className="col-md-4 col-sm-6 col-xs-6">
            <div className="Emotion" id="Worried">
              <Link tag={Link} to="/home">Worried</Link>
            </div>
          </div>
          <div className="col-md-4 col-sm-6 col-xs-6">
            <div className="Emotion" id="Reflective">
              <Link tag={Link} to="/home">Reflective</Link>
            </div>
          </div>
          <div className="col-md-4 col-sm-6 col-xs-6">
            <div className="Emotion" id="Other">
              <Link tag={Link} to="/home">Other</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Feelings;