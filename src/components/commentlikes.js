import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import "./comments.css";





function CommentLikes( ID) {
    const [totalLikes, setTotalLikes] = useState("0")
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

    
    
    
    
    
    
    
    
    return (
        <div>
            <div>
                <button>
                    +
                </button>
            </div>
            <div>
                <button>
                    -
                </button>
            </div>
            <div>

            </div>
        </div>
    )
}

export default CommentLikes
