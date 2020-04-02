import React, { useState } from "react";
import "./login.css";
import Landing from "./landing";
import { Link, useHistory } from "react-router-dom"
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// <--installed toast to test for login success
import axios from "axios";
toast.configure()

function Login() {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  let history = useHistory()

  // ++++++++++++ Get Email and Password from the Form and Login the User ++++++++
  const handleLogin = () => {
    setEmail("")
    setPassword("")
    loginCall() //resets email and password to empty, then initiates Login API call

  }
  //----> HANDLE EMAIL AND PASS INPUT
  const handleEmailInput = (e) => {
    setEmail(e.target.value)
    // console.log(email)
  }

  const handlePassInput = (e) => {
    setPassword(e.target.value)
    // console.log(pass)
  }

  // -----> Login API call (localhost for now, change to heroku once deployed)

  const loginCall = () => {
    axios({
      method: 'post',
      url: 'https://marbles-backend.herokuapp.com/api/v1/users/login',
      data: {
        email: email,
        password: password
      }
    })
      .then(result => {
        const { status, message, access_token, user } = result.data
        // console.log(result.data.user.id)
        localStorage.setItem('jwt', access_token)
        localStorage.setItem('user', JSON.stringify(user))
        // assign a variable to JSON.parse(localStorage.getItem('user')) to access id, name and email of current user. See profile.js
        // toast.success(`Welcome back ${user.email} and ${user.name}`)
        // toast.success(`${message}`)
        // setLoggedIn(true)
        history.push('/mood') //redirects user to profile page after login
      })
      .catch(error => {
        // console.error(error.response) // so that we know what went wrong if the request failed
        toast.error(`Something went wrong`)
      })
  }

  return (
    <>
      <Landing />
      <div className="container d-flex flex-column align-items-center" id="logInContainer">
        <img className="logInLogo" src="./logo.png"></img>
        <form id="loginStuff">
          <input type="text" className="form-control" placeholder="email address" id="LogInInput" value={email} onChange={handleEmailInput} />
          <input type="password" className="form-control" placeholder="password" id="LogInInput" value={password} onChange={handlePassInput} />
          <Link className="LogInBtn" onClick={handleLogin}>log in</Link>
          <Link tag={Link} to="/" className="ChangedMeMind">changed my mind</Link>
        </form>
      </div>
    </>
  )
}

export default Login;