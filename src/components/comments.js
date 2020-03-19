import React, { useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import "./comments.css"

function Comments( threadId, userID ) {
    const [text, setText] = useState("")
    

    const handleTextChange = (e) => {
        let txt = e.target.value
        setText(text)
    }

    const handleTextSubmit = () => {
        axios.post(`https://marbles-backend.herokuapp.com/api/v1/comments/new/${threadId}`, {
            text: text,
            user: userID,
            thread: threadId
        }).then(response => {
            console.log(response.data)
        }) 
    }






    return (
        <div className="container-fluid">
            <form onSubmit={handleTextSubmit} >
                <div>
                    <input id="commentText" value={text} onChange={handleTextChange()} type="text" placeholder="Write some encouragement here">

                    </input>
                </div>
                <div className="btn btn-outline-warning border-0" type="submit" >
                    Encourage
                </div>

            </form>
            
            
        </div>
    )
}

export default Comments
