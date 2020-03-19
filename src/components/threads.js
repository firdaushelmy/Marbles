import React, { useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import "./threads.css"

function Threads(userID) {
    const [content, setContent] = useState("")
    const [template, setTemplate] = useState("")

    const handleContentChange = (e) => {
        let text = e.target.value
        let txt = document.getElementById("commentText").append(text)
        setContent(txt)
    }

    const handleTemplateChange = (e) => {
        let img = e.target.value
        setTemplate(img)
    }

    const handleContentSubmit = () => {
        axios.post(`https://marbles-backend.herokuapp.com/api/v1/threads/new/`, {
            content: content,
            user: userID,
            template: template
        }).then(response => {
            console.log(response.data)
        })
    }


    return (
        <div className="container-fluid">
            <form onSubmit={handleContentSubmit} >
                <div>
                    <input id="commentText" value={content} onChange={handleContentChange} type="text" placeholder="Write your post here">

                    </input>
                
                </div>
                <div>
                    <input>
                    </input>
                    insert picture/templates here
                </div>
                <div className="btn btn-outline-warning border-0" type="submit" >
                    Post Thread
                </div>

            </form>


        </div>
    )
}

export default Threads
