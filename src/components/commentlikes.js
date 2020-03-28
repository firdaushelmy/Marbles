import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import "./comments.css";





function CommentLikes( comID ) {
    const [totalLikes, setTotalLikes] = useState("0")

    console.log(comID)
    useEffect(() => {
        axios.get(
                `https://marbles-backend.herokuapp.com/api/v1/comment_like/${comID}`
            )
            .then(response => {
                console.log(response)
                
                setTotalLikes(response.data.length)
            });


    }, [])

    // const addLikes = () => {
    //     axios.post(`https://marbles-backend.herokuapp.com/api/v1/comment_like/c_like/${ID}`, {
    //         user: localStorage.getItem("user"),
    //         comment: commentID.id,


    //     }
        
    //     ).then(response => {
    //         console.log(response.data)
    //     })
    // }
    

    
    
    
    
    
    
    return (
        
            
            <div>
                Likes: {totalLikes}
            </div>
        
    )
}

export default CommentLikes
