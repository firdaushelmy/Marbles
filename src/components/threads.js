import React, { useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import "./threads.css"
import Text2Image from '@xg4/text2image'

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

        const ti = new Text2Image()
        const url = ti.createURL('hello world')
        const img = new Image()
        img.src = url
        setTemplate(img)
        console.log(template)


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
        <div className="container-fluid" id="AddImageContainer">
            <form className="AddImageForm" onSubmit={handleUpload}>
                <div className="ImagePreviewDivBorder">
                    <div className="ImagePreviewDiv">
                        <img className="ImagePreview" src={previewImage} alt="preview" />
                    </div>
                </div>
                <div>
                    <input className="CommentText" value={content} onChange={handleContentChange} type="text" placeholder="click to write a caption"></input>
                </div>
                <div className="AddImageWrapper">
                    <input id="AddImageInput" type="file" name="image-file" onChange={handleTemplateChange} multiple={false}></input>
                    <div>
                        <label for="AddImageInput" className="ChooseImageButton">choose
                    file</label>
                    </div>
                </div>
                <button className="AddPostPostButton" >post
                </button>
            </form>
        </div>
    )
}

export default Threads
