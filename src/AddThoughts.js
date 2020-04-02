import React, { useState } from 'react'
import "./AddThoughts.css";
import axios from "axios";
import { useHistory } from "react-router-dom";

function AddThoughts() {
  const [content, setContent] = useState("")
  const jwt = localStorage.getItem("jwt")
  let history = useHistory()

  const handleUpload = e => {
    e.preventDefault()
    let uploadForm = new FormData();
    uploadForm.append("caption", content)

    axios.post(`https://marbles-backend.herokuapp.com/api/v1/diaries/`, uploadForm, {
      headers: { Authorization: `Bearer ${jwt}` }
    })
      .then((result) => {
        console.log(result.data)
        history.push("/thoughts")

      })
      .catch(err => console.log(err.response))
  }

  const handleContentChange = (e) => {
    setContent(e.target.value)
    console.log(content)
  }

  return (
    <div className="container" id="addThoughtsContainer">
      <div className="addYourThoughts">write your thoughts
      <button className="addThoughtsPost" onClick={handleUpload}>post</button>
      </div>
      <textarea autoResize="true" placeholder="click me and start writing" className="addThoughtsTextArea" value={content} onChange={handleContentChange}></textarea>
    </div>
  )
}

export default AddThoughts;