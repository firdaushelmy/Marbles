import React, { useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import "./threads.css"

function Threads(userID) {
    const [content, setContent] = useState("")
    const [template, setTemplate] = useState("")
    const [previewImage, setPreviewImage] = useState(null);
    const jwt = localStorage.getItem("jwt")


    const handleUpload = e => {
        e.preventDefault()
        let uploadForm = new FormData();
        uploadForm.append("image", template)
        uploadForm.append("caption", content)
        console.log(uploadForm.entries())

        axios.post(`https://marbles-backend.herokuapp.com/api/v1/threads/`, uploadForm, {
            headers: { Authorization: `Bearer ${jwt}` }
        })
            .then((result) => {
                if (result.data.success) {
                    //for now will console log if successful
                    console.log(result.data)
                } else {
                    console.log(result.data)
                }
            })
            .catch(err => console.log(err.response))
    }



    const handleContentChange = (e) => {
        setContent(e.target.value)
        console.log(content)
    }

    const handleTemplateChange = (e) => {
        setPreviewImage(null)
        let imageFile = e.target.files[0]
        if (imageFile) {
            let newPreview = URL.createObjectURL(imageFile)
            setPreviewImage(newPreview)
        }
        setTemplate(imageFile)
    }

    // ------ Keeping the below just in case -----

    // const handleContentSubmit = () => {
    //     axios.post(`https://marbles-backend.herokuapp.com/api/v1/threads/new/`, {
    //         content: content,
    //         user: userID,
    //         template: template
    //     }).then(response => {
    //         console.log(response.data)
    //     })
    // }


    return (
        <div className="container-fluid">
            <form>
                <img //Display preview image
                    className="w-75"
                    style={{
                        position: "absolute",
                        left: "50%",
                        top: "50%",
                        transform: "translate(-50%, -50%)",
                        maxHeight: "350px",
                        maxWidth: "350px"
                    }}
                    src={previewImage}
                    alt="preview" />
                <div>
                    <input id="commentText" value={content} onChange={handleContentChange} type="text" placeholder="Write your post here">
                    </input>

                </div>
                <div>
                    <input
                        type="file"
                        name="image-file"
                        onChange={handleTemplateChange}
                        multiple={false}>

                    </input>
                </div>
                <div className="btn btn-outline-warning border-0" type="button" onSubmit={handleUpload} >
                    Post Thread
                    {/* Maybe change this to a button and to onSubmit in the future? */}
                    
                </div>

            </form>


        </div>
    )
}

export default Threads
