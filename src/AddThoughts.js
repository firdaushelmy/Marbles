import React from "react";
import "./AddThoughts.css";

function AddThoughts() {
  return (
    <div className="container" id="AddThoughtsContainer">
      <div className="AddYourThoughts">write your thoughts
      <button className="AddThoughtsPost">post</button>
      </div>
      <textarea autoResize="true" placeholder="click me and start writing" className="AddThoughtsTextArea"></textarea>
    </div>
  )
}

export default AddThoughts;