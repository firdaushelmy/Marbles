import React from "react";
import "./login.css";
import Landing from "./landing";

function Login() {
  return (
    <>
      <Landing />
      <div className="container d-flex flex-column align-items-center" id="LogInContainer">
        <h1 className="LogIn">Log In</h1>
        <form id="loginStuff">
          <h6 className="LogInField">Username:</h6>
          <input type="text" />
          <h6 className="LogInField">Password:</h6>
          <input type="password" />
          <button type="submit" className="LogInBtn">Log In</button>
        </form>
      </div>
    </>
  )
}

export default Login;