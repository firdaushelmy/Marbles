import React from "react";
import "./login.css";
import Landing from "./landing";
import { Link } from "react-router-dom"

function Login() {
  return (
    <>
      <Landing />
      <div className="container d-flex flex-column align-items-center" id="LogInContainer">
        <img className="Logo" src="./logo.png"></img>
        <form id="loginStuff">
          <input type="text" className="form-control" placeholder="email address" id="LogInInput" />
          <input type="password" className="form-control" placeholder="password" id="LogInInput" />
          <Link tag={Link} to="/mood" className="LogInBtn">log in</Link>
          <Link tag={Link} to="/" className="ChangedMeMind">changed my mind</Link>
        </form>
      </div>
    </>
  )
}

export default Login;