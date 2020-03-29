import React, { useState, useEffect } from "react";
import "./signup.css";
import Landing from "./landing";
import { Link, useHistory } from "react-router-dom";
import { FormGroup, Label, Input, Button, FormFeedback, FormText } from 'reactstrap';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";

function SignUp() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPass] = useState("")
  const [confirmPass, setConfirmPass] = useState("") //Implement confirm passwordsword
  let history = useHistory()

  // ----- handle input functions below -----


  const handleNameInput = (e) => {
    setName(e.target.value)
    console.log(name)
  }

  const handleEmailInput = (e) => {
    setEmail(e.target.value)
    console.log(email)
  }

  const handlePassInput = (e) => {
    setPass(e.target.value)
    console.log(password)
  }

  const handleConfPassInput = (e) => {
    setConfirmPass(e.target.value)
    console.log(password)
  }



  // ---- Colored form field validations below for Username, Password and ConfirmPassword ----

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

  const getPassProp = () => {
    if (!password.length) {
      return null;
    }
    if (password.length <= 6) {
      return { invalid: true };
    } else {
      return { valid: true };
    }
  };


  const getPassFeedback = () => {
    if (!password.length) {
      return null;
    }

    if (password.length <= 6) {
      return <FormFeedback invalid>Password must be at least 6 characters</FormFeedback>;
    } else {
      return <FormFeedback valid>Sweet! That password works</FormFeedback>
    }

  };

  const getConfPassProp = () => {
    if (!confirmPass.length) {
      return null;
    }
    if (confirmPass !== password || confirmPass.length <= 6) {
      return { invalid: true };
    } else {
      return { valid: true };
    }
  };

  const getConfPassFeedback = () => {
    if (confirmPass.length <= 6) {
      return <FormFeedback invalid>Password must be more than 6</FormFeedback>;
    }

    if (confirmPass !== password && confirmPass.length > 6) {
      return <FormFeedback invalid>Passwords must match</FormFeedback>;
    }

    if (confirmPass === password) {
      return <FormFeedback valid>Sweet! That password matches</FormFeedback>
    }
  };

  // ---- Handle login and post api ----


  const handleLogin = () => {
    if (password !== confirmPass) {
      toast.error(`Password do not match`)
    } else {//Put in logic for matching password
      signUpCall() //initiates Post to API
      setEmail("") //empties Email field
      setPass("") //empties Pass field
      setConfirmPass("")
      //closes modal window
    }
  }

  const signUpCall = () => {
    axios({
      method: 'POST',
      url: 'https://marbles-backend.herokuapp.com/api/v1/users/',
      data: {
        name: name,
        email: email,
        password: password,
        gender: ""
      }
    })
      .then(response => {
        // console.log(response)
        history.push('/login')
        toast.success(`Hello ${name}, you're account is ${email}`)
      })
      .catch(error => {
        console.error(error.response) // so that we know what went wrong if the request failed
        toast.error(`Something went wrong`)
      })

  }

  return (
    <>
      <Landing />
      <div
        className="container d-flex flex-column align-items-center"
        id="SignUpContainer"
      >
        <img className="Logo" src="./logo.png"></img>
        {/* Note: Had to change <input></input> to <Input/> in order for FormFeedback to work */}
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
            onChange={handleEmailInput}
          ></input>
          <Input
            className="form-control"
            id="SignUpInput"
            type="password"
            placeholder="password"
            onChange={handlePassInput} {...getPassProp()}
          />
          {getPassFeedback()}
          <Input
            className="form-control"
            id="SignUpInput"
            type="password"
            placeholder="confirm password"
            onChange={handleConfPassInput} {...getConfPassProp()}
          />
          {getConfPassFeedback()}
          <button type="submit" className="SignUpBtn" onClick={handleLogin} disabled={email.length < 6 || password.length < 6 || name.length < 6 || confirmPass.length < 6}>
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
