import React, { useState, useEffect } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import "./comments.css"

function Comments(threads, threadId, userID) {
    const [text, setText] = useState("")
    const [allComments, setAllComments] = useState([])
    console.log(threadId)
    console.log(threads)
    const handleTextChange = (e) => {
        let tt = e.target.value
        console.log(tt)
        let txt = document.getElementById("commentText").append(tt)
        setText(txt)
    }

    useEffect(() => {
        axios.get(`https://marbles-backend.herokuapp.com/api/v1/comments/${threadId}`).then((response) => {

            setAllComments(response.data)


        })



    }, [])

    const handleTextSubmit = (e) => {
        e.preventDefault()
        axios.post(`https://marbles-backend.herokuapp.com/api/v1/comments/new/${threadId}`, {
            text: text,
            user: userID,
            thread: threads.id
        }).then(response => {
            console.log(response.data)
        })
    }






    return (
        <div className="container-fluid">
            


            <div>
                <form onSubmit={handleTextSubmit} >
                    <div>
                        <input id="commentText" value={text} onChange={handleTextChange} type="text" placeholder="Write some encouragement here">

                        </  input>
                    </div>
                    <button className="btn btn-outline-warning border-0" type="submit button" >
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
