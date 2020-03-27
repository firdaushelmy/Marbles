import React, { useState, useEffect } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import "./comments.css";
import { Container, Col, Button } from "reactstrap";

function Comments(threads, threadId, userID, isLoading) {
  const [text, setText] = useState("")
  const [allComments, setAllComments] = useState([])
  console.log(threads.threadId)
  console.log(threads)
  console.log(allComments)

  const handleTextChange = (e) => {
    let tt = e.target.value
    console.log(tt)
    // let txt = document.getElementById("commentText").append(tt)
    setText(tt)
  }
  console.log(text);
  useEffect(() => {
    axios
      .get(
        `https://marbles-backend.herokuapp.com/api/v1/comments/${threads.threadId}`
      )
      .then(response => {
        let com = response.data.comments;
        let comm = com.sort(function (a, b) { return b.id - a.id })
        console.log(comm)

        setAllComments(comm);
      });
  }, [])
  console.log(localStorage.getItem("user"));
  const handleTextSubmit = (e) => {
    e.preventDefault()
    axios
      .post(
        `https://marbles-backend.herokuapp.com/api/v1/comments/new/${threads.threadId}`,
        {
          text: text,
          user: localStorage.getItem("user"),
          thread: threads.threadId
        }
      )
      .then(response => {
        console.log(response.data);
      });
  }

  return (
    <div className="container-fluid" id="CommentContainer">
      <div className="CommentDiv">
        <form onSubmit={handleTextSubmit}>
          <div>
            <input className="form-control" id="commentText" value={text} onChange={handleTextChange} type="text" placeholder="Write some encouragement here"></input>
          </div>
          <Button className="EncourageBtn" type="submit button" >
            Encourage</Button>
        </form>
      </div>

      {allComments.map(comment => {
        return (
          <Container className="ContainerChatIndivid">
            <Col>
              <div className="DivChatBox">
                {comment.text}
              </div>
            </Col>
          </Container>
        )
      })
      }
    </div>
  )
}

export default Comments;
