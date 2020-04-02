import React, { useState, useEffect } from "react";
import "./profile.css";
import { Link } from "react-router-dom"
import { Form, Button, Modal } from "react-bootstrap"
import axios from "axios";
import Image from "react-graceful-image"

// ---- Note: page WILL NOT LOAD if you are not logged in, a.k.a if localStorage has no jwt and user. Make sure u login first ---

function Profile() {

  const [showModal, setShowModal] = useState(false);
  const handleCloseModal = () => setShowModal(false);
  const handleShowModal = () => setShowModal(true);
  const [previewImage, setPreviewImage] = useState(null);
  const [profileImage, setProfileImage] = useState(null);
  const [template, setTemplate] = useState("")
  const jwt = localStorage.getItem("jwt")

  const current_user = JSON.parse(localStorage.getItem('user'))
  //to get name,id and email of current user, use:
  //current_user.name, current_user.id, current_user.email

  // -- SET USER'S CHOSEN IMAGE TO PREVIEW AND PROFILE IMAGE STATE --- 

  const handleTemplateChange = (e) => {
    setPreviewImage(null)
    let imageFile = e.target.files[0]
    if (imageFile) {
      let newPreview = URL.createObjectURL(imageFile)
      setPreviewImage(newPreview)
    }
    setTemplate(imageFile)
  }


  // ----- GET API TO RETRIEVE USER'S PROFILE PIC, IF AVAILABLE ---- 

  useEffect(() => {
    axios.get(`https://marbles-backend.herokuapp.com/api/v1/users/profilepics/${current_user.id}`, {
      headers: { Authorization: `Bearer ${jwt}` }
    })
      .then((result) => {
        // console.log(result.data.profile_picture)
        setProfileImage(result.data.profile_picture)
      })
      .catch(err => console.log(err.response))
  }, []);

  // ---- POST API TO UPLOAD PROFILE PIC ------

  const handleUpload = e => {
    e.preventDefault()
    let uploadForm = new FormData();
    uploadForm.append("image", template)
    console.log(uploadForm.entries())

    axios.post(`https://marbles-backend.herokuapp.com/api/v1/users/profilepics`, uploadForm, {
      headers: { Authorization: `Bearer ${jwt}` }
    })
      .then((result) => {
        console.log(result.data)
        window.location.reload()
      })
      .catch(err => console.log(err.response))
  }

  return (
    <>
      <div className="container" id="profileContainer">
        {/* IF PROFILE IMAGE EXISTS,DISPLAY IT. ELSE, SHOW "+PROFILE". CLICKING BOTH WILL OPEN MODAL */}
        <div className="profilePicDisplay">
          {profileImage ? <img onClick={handleShowModal} className="profileImagePreview" src={`https://marblesbackend.s3-ap-southeast-1.amazonaws.com/${profileImage}`} alt="preview" /> : <h6 onClick={handleShowModal}>+profile</h6>}
        </div>
        <h2>{current_user.name}</h2>
        <div className="encouragementStarred">
          <div className="encouragements">
            <h6>{Math.floor(Math.random() * 1000)}</h6>
            <h6>encs</h6>
          </div>
          <div className="encouragements">
            <h6>{Math.floor(Math.random() * 1000)}</h6>
            <h6>stars</h6>
          </div>
        </div>
        <Link tag={Link} to="/mood" className="profileLink">edit profile</Link>
        <Link tag={Link} to="/emergency" className="profileLink">emergency contact</Link>
        <Link tag={Link} to="/volunteer" className="profileLink">volunteer</Link>
        <Link tag={Link} to="/mood" className="profileLink">how to seek help</Link>
        <Link tag={Link} to="/faq" className="profileLink">f.a.q.</Link>
        <Link tag={Link} to="/mood" className="profileLink">support group</Link>
      </div>
      {/* MODAL TO UPDATE PROFILE PIC HERE  */}
      <Modal show={showModal} className="addProfilePicModal">
        <Modal.Header>
          <Button onClick={handleCloseModal} className="profileBackButton">
            back
          </Button>
        </Modal.Header>
        <Modal.Body>
          <Modal.Title>
          </Modal.Title>
          <div className="addImageWrap">
            <div className="profileImagePreviewDiv">
              {previewImage ? <img src={previewImage} /> :
                profileImage ? <img className="profileImagePreview" src={`https://marblesbackend.s3-ap-southeast-1.amazonaws.com/${profileImage}`} alt="preview" /> : <h2>choose a file</h2>}

            </div>
            <input id="addProfileImageInput" type="file" name="image-file" onChange={handleTemplateChange} multiple={false}></input>
            <label for="addProfileImageInput" className="chooseProfileImageButton">choose a file</label>
            {/* IF NO PROFILE IMAGE EXISTS, DISPLAY PREVIEW IMAGE ONCE CHOSEN BY USER. IF NEITHER EXISTS, DISPLAY THE H2 TEXT*/}
          </div>
        </Modal.Body>
        <Modal.Footer>
          <button className="PostProfilePicButton" onClick={handleUpload}>post
                </button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default Profile;

// URL FOR PROFILEIMAGE
// src = {`https://marblesbackend.s3-ap-southeast-1.amazonaws.com/${previewImage}`}