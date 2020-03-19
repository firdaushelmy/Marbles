import React, { useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";

function comments() {
    const [text, setText] = useState("")

    const handleTextChange = (e) => {
        let text = e.target.value
        setText(text)
    }








    return (
        <div className="container-fluid">
            <form onSubmit={handleTextSubmit} >
                <div>
                    <input id="commentText" value={text} onChange={handleTextChange()} type="text" placeholder="Write some encouragement here">

                    </input>
                </div>
                <div className="btn btn-outline-warning border-0" type="submit" >
                    Encourage
                </div>

            </form>
            
            
        </div>
    )
}

export default comments
