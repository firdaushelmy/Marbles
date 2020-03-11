import React from "react";
import "./signup.css"

function SignUp() {
  return (
    <div className="container d-flex flex-column align-items-center">
      <h1>Sign Up Here</h1>
      <div className="col-6 form-group" id="SignUpDiv">
        <h6>Username: </h6>
        <input class="form-control" type="text" placeholder="eg:John Smith"></input>
        <h6>Email: </h6>
        <input class="form-control" type="text" placeholder="eg: name@example.com"></input>
        <h6>Password: </h6>
        <input class="form-control" type="password" placeholder="at least 8 characters"></input>
        <h6>Confirm Password: </h6>
        <input class="form-control" type="password"></input>
      </div>
      <button type="submit" className="LogInBtn">Submit</button>
    </div>
  )
}

export default SignUp;