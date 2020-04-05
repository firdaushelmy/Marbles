import React, { useState } from "react";
import "./panic.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios"

function Panic() {
  function handleClick(e) {
    e.preventDefault();
    let Panic = document.querySelector("#PanicSurrounding")
    // Panic.append("Okay")
    // Panic.style.display = "";
    Panic.style.position = "absolute";
    Panic.style.left = Math.floor(Math.random() * 100) + "px";
    Panic.style.top = Math.floor(Math.random() * 100) + "px";
    Panic.style.right = Math.floor(Math.random() * 100) + "px";
  }
  const cuID = JSON.parse(localStorage.getItem('user'))
  const cID = cuID.id
  const handleMailgun = (e) => {
    e.preventDefault()
    axios.post(`https://marbles-backend.herokuapp.com/api/v1/emergencies/panic/${cID}`).then(res => {
      console.log(res.data)
      toast.success("Please calm down! Emergency contact has been notify about the button press")
    })
  }

  return (
    <div className="container" id="panicSurrounding">
      <div className="panicSurround1">
        <div className="panicSurround2">
          <button className="panic" onClick={handleMailgun}>
            PANIC
           </button>
        </div>
      </div>
    </div>
  )
}

export default Panic;