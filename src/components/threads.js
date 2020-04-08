import React, { useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import "./threads.css";
import { Link } from "react-router-dom";
import styled, { ThemeProvider, keyframes, withTheme } from 'styled-components';
import { Button } from "react-bootstrap";
// import Text2Image from '@xg4/text2image'

const CommentTextInput = styled.input`
    color: ${props => props.theme.commentTextInputCol};
    box-shadow: 0 0 5px -1px ${props => props.theme.emergencyInputBoxShadow};
    &::placeholder {
        color: ${props => props.theme.commentTextInputCol};
    };
    &:focus {
      box-shadow: 0 0 7px -1px ${props => props.theme.emergencyInputBoxShadowFocus};
    };
    `

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

    const previewImageShow = (e) => {
        const preview = document.querySelector(".imagePreviewDiv");
        preview.src = { previewImage };
        preview.style.display = "block"
    }

    const ImagePreviewDiv = styled.div`
        background-color: ${props => props.theme.imagePreviewDivBg};
    `

    ImagePreviewDiv.defaultProps = {
        theme: {
            imagePreviewDivBg: "#FBD6C8"
        }
    }

    CommentTextInput.defaultProps = {
        theme: {
            commentTextInputCol: "#FBA589",
            emergencyInputBoxShadow: "#FBA589",
            emergencyInputBoxShadowFocus: "#FBD6C8"
        }
    }

    const CommentPostButton = styled(Button)`
     background-color: ${props => props.theme.encBtnBg};
     color: ${props => props.theme.encBtnCol};
      border: 2px solid ${props => props.theme.encBtnBorder};
     &:hover {
      background-color: ${props => props.theme.encBtnBgHover};
      color: ${props => props.theme.encBtnColHover};
      border: 2px solid ${props => props.theme.encBtnBorderHover};
      &:active {
      background-color: ${props => props.theme.encBtnBgHover};
      color: ${props => props.theme.encBtnColHover};
      border: 2px solid ${props => props.theme.encBtnBorderHover};
     }
`;

    CommentPostButton.defaultProps = {
        theme: {
            encBtnBg: "#FBD6C8",
            encBtnCol: "black",
            encBtnBorder: "#FBA589",
            encBtnBgHover: "#FBA589",
            encBtnColHover: "black",
            encBtnBorderHover: "#FBA589"
        }
    };

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
        <form className="addImageForm" onSubmit={handleUpload} onChange={previewImageShow}>
            <div className="imagePreviewDivBorder">
                <ImagePreviewDiv className="imagePreviewDiv">
                    <div className="addImageWrapper">
                        <input id="addImageInput" type="file" name="image-file" onChange={handleTemplateChange} multiple={false}></input>
                        <div>
                            {previewImage ? <img className="imagePreview" src={previewImage} /> :

                                <label for="addImageInput" className="chooseImageButton">choose
                    file</label>
                            }
                        </div>
                    </div>
                    {/* <img className="imagePreview" src={previewImage} /> */}
                </ImagePreviewDiv>
            </div>
            <div>
                <CommentTextInput className="commentText" value={content} onChange={handleContentChange} type="text" placeholder="click to write a caption"></CommentTextInput>
            </div>
            <CommentPostButton className="addPostPostButton" type="submit" >post</CommentPostButton>
        </form>
    )
}

export default Threads
