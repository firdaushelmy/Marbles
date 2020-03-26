import React, { useState, useEffect } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import "./comments.css"
import CommentLikes from "./commentlikes"

function Comments(threads, threadId, userID) {
    const [text, setText] = useState("")
    const [allComments, setAllComments] = useState([])
    console.log(threads.threadId)
    console.log(threads)
    console.log(allComments)
    const [btnDisabled,setBtnDisabled] = useState(true)
    
    const btnState = () => {
        
        const button = (document.getElementById("cmtBtn"));
        button.disabled = btnDisabled
        if (text != "") {
            button.disabled = false
            setBtnDisabled(false)
        } 
        
    }
    
    
    
    const handleTextChange = (e) => {
        
        let tt = e.target.value
        console.log(tt)
        // let txt = document.getElementById("commentText").append(tt)
        setText(tt)
    }
    console.log(text);
    const onChange = (e) => {
        btnState()
        handleTextChange(e)
    }
    useEffect(() => {
        axios
        .get(
            `https://marbles-backend.herokuapp.com/api/v1/comments/${threads.threadId}`
          )
          .then(response => {
              let com = response.data.comments;
              let comm = com.sort(function(a, b) {return b.id - a.id})
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
            let com = response.data.comments;
            let comm = com.sort(function(a, b) {
              return b.id - a.id;
            });
            console.log(comm);
            let newComments = [...allComments];
            newComments.push(comm);

            setAllComments(newComments);
          });

          setText("");

    }






    return (
        <div className="container-fluid">
            
            <CommentLikes ID={threads.threadId} />

            <div>
                <form onSubmit={handleTextSubmit} >
                    <div>
                        <input id="commentText" value={text} onChange={onChange} type="text" placeholder="Write some encouragement here">

                        </  input>
                    </div>
                    <button id="cmtBtn" className="btn btn-outline-warning border-0" type="submit button" >
                        Encourage
                </button>

                </form>


            </div>
             
                

            {allComments.map(comment =>{
                return(
                    <div>
                            {comment.text}
                        </div>


                )
            })
            }
            


        </div>
    )
}

export default Comments;
