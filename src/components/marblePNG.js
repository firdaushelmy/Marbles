import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "./marble.png";

function MarblePNG({ handleClick }) {
  return (
    <div>
      <div>
        <img onClick={handleClick} src={"../logo_no_marbles.png"} />
      </div>
    </div>
  );
}

export default MarblePNG;
