import React from "react";
import "./landing.css"
import { Link } from "react-router-dom"

function Landing() {
  return (
    <>
      <a className="quotes" id="canDoThis">You can do this</a>
      <a className="quotes" id="changeToday">Change your life today</a>
      <a className="quotes" id="dontWorry">Don't worry, be happy</a>
      <a className="quotes" id="jamesBlunt">You're beautiful</a>
      <a className="quotes" id="areLoved">You are loved</a>
      <a className="quotes" id="goSlowly">Smile, Breathe and go slowly</a>
    </>
  )
}

export default Landing;