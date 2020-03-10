import React from "react";

function Feelings() {
  return (
    <>
      <div className="HowYouDoin">
        <p>How are you feeling today?</p>
      </div>
      <div className="EmotionBar">
        <div>
          <div>
            <a href="#">
              Depressed</a>
          </div>
        </div>
        <div>
          <div>
            <a href="#">Anxious</a>
          </div>
        </div>
        <div>
          <div>
            <a href="#">Heartbroken</a>
          </div>
        </div>
        <div>
          <div>
            <a href="#">Worried</a>
          </div>
        </div>
        <div>
          <div>
            <a href="#">Reflective</a>
          </div>
        </div>
        <div>
          <div>
            <a href="#">Other</a>
          </div>
        </div>
      </div>
    </>
  )
}

export default Feelings;