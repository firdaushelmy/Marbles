import React, { useState, useEffect } from 'react'
import axios from "axios";

function Thoughts() {
    const [threads, setThreads] = useState([]);

    useEffect(() => {
        axios.get("https://marbles-backend.herokuapp.com/api/v1/threads/")
            .then(result => {
                console.log(result.data)
                setThreads(result.data)
            });
    }, [])


    return (
        threads.map(thread => {
            return (
                <>
                    <div>
                        {thread.content && thread.template ? <h6>{thread.content}</h6> : <h2>no content</h2>}
                    </div>
                </>
            )
        })
    )
}

export default Thoughts;
