import React from "react";
import "./signup.css";
import Landing from "./landing";
import { Link } from "react-router-dom";

function SignUp() {
  return (
    <>
      <Landing />
      <div
        className="container d-flex flex-column align-items-center"
        id="SignUpContainer"
      >
        <img className="Logo" src="./logo.png"></img>
        <form className="SignUpForm">
          <input
            className="form-control"
            id="SignUpInput"
            type="text"
            placeholder="username"
          ></input>
          <input
            className="form-control"
            id="SignUpInput"
            type="text"
            placeholder="email"
          ></input>
          <input
            className="form-control"
            id="SignUpInput"
            type="password"
            placeholder="password"
          ></input>
          <input
            className="form-control"
            id="SignUpInput"
            type="password"
            placeholder="confirm password"
          ></input>
          <button type="submit" className="SignUpBtn">
            Sign Up
          </button>
          <Link tag={Link} to="/" className="ChangedMeMind">
            changed my mind
          </Link>
        </form>
      </div>
    </>
  );
}

export default SignUp;
