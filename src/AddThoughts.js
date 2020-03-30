import React from "react";
import "./AddThoughts.css";

function AddThoughts() {
  return (
    <div className="container" id="addThoughtsContainer">
      <div className="addYourThoughts">write your thoughts
      <button className="addThoughtsPost">post</button>
      </div>
      <textarea autoResize="true" placeholder="click me and start writing" className="addThoughtsTextArea"></textarea>
    </div>
  )
}

export default AddThoughts;