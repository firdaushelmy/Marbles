import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
function ThreadLikes({ threadID }) {
    const [totalLikes, setTotalLikes] = useState("0")
    const current_user = JSON.parse(localStorage.getItem('user'))
    console.log(`thread is is ${threadID}`)
    useEffect(() => {
        axios.get(
            `https://marbles-backend.herokuapp.com/api/v1/thread_likes/${threadID}`
        )
            .then(response => {
                console.log(response.data)
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
            <div onClick={addLikes}>
                <span><i className="far fa-thumbs-up"></i></span>
            </div>
            <div>
                {totalLikes}
            </div>
        </>
    )
}
export default ThreadLikes