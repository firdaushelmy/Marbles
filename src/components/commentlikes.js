import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import "./comments.css";
import "./commentlikes.css"





function CommentLikes({ comID }) {
    const [totalLikes, setTotalLikes] = useState("0")
    // const [likes, setLikes] = useState(comID)

    console.log(comID)
    useEffect(() => {
        axios.get(
            `https://marbles-backend.herokuapp.com/api/v1/comment_like/${comID}`
        )
            .then(response => {
                console.log(response)

                setTotalLikes(response.data.msg.length)
            });


    }, [])

    const addLikes = e => {
        e.preventDefault();
        axios
            .post(
                `https://marbles-backend.herokuapp.com/api/v1/comment_like/c_like/${comID}`,
                {
                    user: localStorage.getItem("user"),
                    comment: comID
                }
            )
            .then(response => {
                console.log(response)
                if (response.data.success) {
                    setTotalLikes(totalLikes + 1);
                }
            });
    };


    return (
        <div className="CommentLikeDiv">
            <form onSubmit={addLikes}>
                <button className="CommentLikeButton">
                    <i className="far fa-thumbs-up"></i><span></span>
                </button>
            </form>
            <div>
                {totalLikes}
            </div>
        </div>

    )
}

export default CommentLikes
