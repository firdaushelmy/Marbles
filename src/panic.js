import React, { useState } from "react";
import "./panic.css";

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

  return (
    <div className="container" id="PanicSurrounding">
      <div className="PanicSurround1">
        <div className="PanicSurround2">
          <button className="Panic" onClick={handleClick}>
            PANIC
           </button>
        </div>
      </div>
    </div>
  )
}

export default Panic;