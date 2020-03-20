import React, { useState, useEffect } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import "./comments.css"

function Comments( threads,threadId, userID ) {
    const [text, setText] = useState("")
    const [allComments,setAllComments] = useState([])
    // console.log(threads)
    // setAllComments(threadId) 
    const handleTextChange = (e) => {
        let tt = e.target.value
        let txt = document.getElementById("commentText").append(tt)
        setText(txt)
    }

    useEffect(() => {
        axios.get("https://marbles-backend.herokuapp.com/api/v1/comments/1").then((response) => {
            
        setAllComments(response.data)
          

        })


        
    },[])

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
            <div>
            {/* {allComments} */}
                {/* {allComments.map( com => {
                    return (
                        <div>
                            {com}
                            </div>

                    );
                })
                    
                } */}
            </div>

            
                <div>
                <form onSubmit={handleTextSubmit} >
                    <div>
                        <input id="commentText" value={text} onChange={handleTextChange} type="text" placeholder="Write some encouragement here">

                        </  input>
                    </div>
                <div className="btn btn-outline-warning border-0" type="submit button" >
                    Encourage
                </div>

            </form>
            </div>
            
        </div>
    )
}

export default Comments
