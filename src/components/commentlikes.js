import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import "./comments.css";





function CommentLikes( commentID, ID) {
    const [totalLikes, setTotalLikes] = useState("0")
    const [fetchCmtID, setFetchCmtID] = useState("")
    console.log(commentID.commentID.text)
    useEffect(() => {
        axios
            .get(
                `https://marbles-backend.herokuapp.com/api/v1/comment_like/${ID}`
            )
            .then(response => {
                console.log(response.data)
                
                setTotalLikes()
            });


    }, [])

    const addLikes = () => {
        axios.post(`https://marbles-backend.herokuapp.com/api/v1/comment_like/c_like/${ID}`, {
            user: localStorage.getItem("user"),
            comment: commentID.id,


        }
        
        ).then(response => {
            console.log(response.data)
        })
    }
    

    
    
    
    
    
    
    return (
        <div>
            <div>
                <button onClick={addLikes}>
                    +
                </button>
            </div>
            <div>
                <button>
                    -
                </button>
            </div>
            <div>
                No of likes: {totalLikes}
            </div>
        </div>
    )
}

export default CommentLikes
