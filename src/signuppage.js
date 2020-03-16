import React from "react";
import Landing from "./landing";
import { Link } from "react-router-dom";
import "./signuppage.css";

function SignUpPage() {

  return (
    <>
      <Landing />
      <div className="row" id="SignUpButtonContainer">
        <img className="Logo" src="./logo.png"></img>
        <h6 className="AnythingOnYourMind">anything on your mind</h6>
        <div className="StartAnonDiv">
          <Link className="StartAnon" tag={Link} to="/mood">start anonymously</Link>
        </div>
        <div className="SignUpLogIn">
          <Link className="SignUpButton" tag={Link} to="/signup">sign up</Link>
          <Link className="SignUpButton" tag={Link} to="/login">log in</Link>
        </div>
      </div>
    </>
  )
}

export default SignUpPage;
