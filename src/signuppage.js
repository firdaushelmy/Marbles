import React, { useState } from "react";
import Landing from "./landing";
import { Link } from "react-router-dom";
import "./signuppage.css";

function SignUpPage() {
  const [loggedIn, setLoggedIn] = useState(localStorage.getItem("jwt") !== null)
  function loggedOut() {
    localStorage.removeItem("jwt")
    setLoggedIn(false)
  }
  return (
    <>
      <Landing />
      <div className="row" id="SignUpButtonContainer">
        <img className="Logo" src="./logo.png"></img>
        <div className="SignUpLogIn">
          <Link className="SignUpButton" tag={Link} to="/signup">Sign Up</Link>
          <h6 className="SignUpDivider">|</h6>
          {!loggedIn ? (<Link className="SignUpButton" tag={Link} to="/login">Log In</Link>) : (<Link className="SignUpButton" tag={Link} to="/edit">Edit Profile</Link>)}
        </div>
        <Link className="AboutButton" tag={Link} to="/accountinfo">About Us</Link>
      </div>
    </>
  )
}

export default SignUpPage;
