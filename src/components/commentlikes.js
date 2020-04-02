import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import "./comments.css";
import "./commentlikes.css"





function CommentLikes({ comID }) {
    const [totalLikes, setTotalLikes] = useState("0")
    // const [likes, setLikes] = useState(comID)
    const current_user = JSON.parse(localStorage.getItem('user'))

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
                    user: current_user.id,
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
        <div className="commentLikeDiv">
            <form onSubmit={addLikes}>
                <button className="commentLikeButton">
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
