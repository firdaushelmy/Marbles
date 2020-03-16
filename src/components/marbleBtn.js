import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import MarblePNG from "./marblePNG";
import "./marbleBtn.css";

function MarbleBtn() {
  const [marble, setMarble] = useState(0);

  const [isFaded, setIsFaded] = useState(false);

  const incMarbleCount = () => setMarble(marble + 1);

  function createParticle(x, y) {
    let particle = document.getElementById("plusOneAppear");
    // document.body.append(particle);

    let ranY = Math.floor(Math.random() * 120 + 100);
    let ranX = Math.floor(Math.random() * 50);
    particle.style.display = "";
    particle.style.position = "absolute";
    particle.style.left = x + ranX + "px";
    particle.style.top = y - ranY + "px";
  }
  const handleClick = e => {
    const x = e.clientX;
    const y = e.clientY;
    createParticle(x, y);
    setIsFaded(true);
  };

  return (
    <div className="justify-content-center container-fluid">
      <div className="d-flex justify-content-center mx-auto my-5">
        Marble Count = {marble}
      </div>

      <div
        id="plusOne"
        onClick={incMarbleCount}
        className="logoCenter shake btn disable-doubletap-to-zoom"
      >
        <MarblePNG handleClick={handleClick} />
      </div>
      <div
        onAnimationEnd={() => setIsFaded(false)}
        id="plusOneAppear"
        style={{ display: "none" }}
        className={isFaded ? "fadeOut" : "fadeAniEnd"}
      >
        +1
      </div>
    </div>
  );
}

export default MarbleBtn;
