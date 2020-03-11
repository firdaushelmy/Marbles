import React from "react";
import "./login.css"

function Login() {
  return (
    <>
      <div className="container d-flex flex-column align-items-center">
        <h1>User Log In</h1>
        <div>
          <form>
            <div className="col-6 form-group" id="loginStuff">
              <h6>Username</h6>
              <input type="text" />
              <h6>Password</h6>
              <input type="password" />
              <button type="submit" className="new-signup">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default Login;