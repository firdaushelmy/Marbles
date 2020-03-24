import React from "react";
import "./landing.css"
import { Link } from "react-router-dom"

function Landing() {
  return (
    <>
      <div className="FrontFacePicture"></div>
      <a className="Quotes" id="CanDoThis">You can do this</a>
      <a className="Quotes" id="ChangeToday">Change your life today</a>
      <a className="Quotes" id="DontWorry">Don't worry, be happy</a>
      <a className="Quotes" id="JamesBlunt">You're beautiful</a>
      <a className="Quotes" id="AreLoved">You are loved</a>
      <a className="Quotes" id="GoSlowly">Smile, Breathe and go slowly</a>
      {/* <div className="row" id="SignUpButtonContainer">
        <Link className="SignUpButton" tag={Link} to="/signup">Sign Up Here</Link>
      </div> */}
    </>
  )
}

export default Landing;