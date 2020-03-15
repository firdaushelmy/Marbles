import React from "react";
import "./signup.css";
import Landing from "./landing"

function SignUp() {
  return (
    <>
      <Landing />
      <div className="container d-flex flex-column align-items-center" id="SignUpContainer">
        <h1 className="SignUpHere">Sign Up Here</h1>
        <form className="SignUpForm">
          <h6 className="SignUpField">Username: </h6>
          <input class="form-control" type="text" placeholder="eg:John Smith"></input>
          <h6 className="SignUpField">Email: </h6>
          <input class="form-control" type="text" placeholder="eg: name@example.com"></input>
          <h6 className="SignUpField">Password: </h6>
          <input class="form-control" type="password" placeholder="at least 8 characters"></input>
          <h6 className="SignUpField">Confirm Password: </h6>
          <input class="form-control" type="password"></input>
          <button type="submit" className="SignUpBtn">Sign Up</button>
        </form>
      </div>
    </>
  )
}

export default SignUp;