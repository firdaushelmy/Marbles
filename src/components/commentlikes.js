import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import "./comments.css";





function CommentLikes( comID ) {
    const [totalLikes, setTotalLikes] = useState("0")
    const [likes, setLikes] = useState(comID)

    console.log(likes)
    useEffect(() => {
        axios.get(
                `https://marbles-backend.herokuapp.com/api/v1/comment_like/${likes}`
            )
            .then(response => {
                console.log(response)
                
                setTotalLikes(response.data.msg.length)
            });


    }, [])


    
    
    return (
        
            
            <div>
                Likes: {totalLikes}
            </div>
        
    )
}

export default CommentLikes
