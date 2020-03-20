import React, { useState, useEffect } from "react";
import "./signup.css";
import Landing from "./landing";
import { Link } from "react-router-dom";
import { FormGroup, Label, Input, Button, FormFeedback, FormText } from 'reactstrap';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function SignUp() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPass] = useState("")
  const [confirmPass, setConfirmPass] = useState("") //Implement confirm passwordsword
  const [delay, setDelay] = useState(null);
  const [usernameValid, setUsernameValid] = useState(true);

  const handleNameInput = (e) => {
    setName(e.target.value)
    console.log(name)
  }


  // ---- Colored form field validations below ----

  const getInputProp = () => {
    if (!name.length) {
      return null;
    }
    if (name.length <= 6) {
      return { invalid: true };
    }
    else {
      return { valid: true };
    }
  }

  const getFormFeedback = () => {
    if (!name.length) {
      return null;
    }

    if (name.length <= 6) {
      return <FormFeedback invalid>Username must be at least 6 characters</FormFeedback>;
    }
  }



  return (
    <>
      <Landing />
      <div
        className="container d-flex flex-column align-items-center"
        id="SignUpContainer"
      >
        <img className="Logo" src="./logo.png"></img>
        <form className="SignUpForm">
          <Input
            className="form-control"
            id="SignUpInput"
            type="text"
            placeholder="username"
            onChange={handleNameInput} {...getInputProp()}
          />
          {getFormFeedback()}
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
