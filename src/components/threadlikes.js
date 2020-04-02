import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import "./threadlikes.css";

function ThreadLikes({ threadID }) {
    const [totalLikes, setTotalLikes] = useState("0")
    const current_user = JSON.parse(localStorage.getItem('user'))
    console.log(`thread is is ${threadID}`)
    useEffect(() => {
        axios.get(
            `https://marbles-backend.herokuapp.com/api/v1/thread_likes/${threadID}`
        )
            .then(response => {
                console.log(response)
                setTotalLikes(response.data.msg.length)
            });
    }, [])
    const addLikes = e => {
        e.preventDefault();
        axios.
            post(
                `https://marbles-backend.herokuapp.com/api/v1/thread_likes/`,
                {
                    user_id: current_user.id,
                    thread_id: threadID
                }
            )
            .then(result => {
                console.log(result.data)
                if (result.data.user) {
                    setTotalLikes(totalLikes + 1);
                }
            });
    };
    return (
        <>
            <div onClick={addLikes} className="likes">
                <span className="thumbsUpIcon"><i className="far fa-thumbs-up"></i></span>
                <div className="totalLikes">
                    {totalLikes}
                </div>
            </div>
        </>
    )
}
export default ThreadLikes