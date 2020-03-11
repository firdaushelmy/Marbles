import React from 'react';
import './App.css';
import Feelings from "./feelings"
import { Route } from "react-router-dom"
import Panic from "./panic"
import Navbar from "./navbar"
import Login from "./login"
import SignUp from "./signup"
import Landing from "./landing.js"

function App() {
  return (
    <>
      <Navbar />
      <Route exact path="/">
        <Landing />
      </Route>
      <Route path="/signup">
        <SignUp />
      </Route>
      <Route path="/mood">
        <Feelings />
      </Route>
      <Route path="/panic">
        <Panic />
      </Route>
      <Route path="/login">
        <Login />
      </Route>
    </>
  )
}

export default App;

