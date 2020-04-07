import React, { useState, useEffect } from "react";
import "./profile.css";
import { Link } from "react-router-dom"
import { Form, Button, Modal } from "react-bootstrap"
import axios from "axios";
import Image from "react-graceful-image";
import styled, { ThemeProvider, keyframes, withTheme } from 'styled-components';

// ---- Note: page WILL NOT LOAD if you are not logged in, a.k.a if localStorage has no jwt and user. Make sure u login first ---

function Profile() {

  const [showModal, setShowModal] = useState(false);
  const handleCloseModal = () => setShowModal(false);
  const handleShowModal = () => setShowModal(true);
  const [previewImage, setPreviewImage] = useState(null);
  const [profileImage, setProfileImage] = useState(null);
  const [template, setTemplate] = useState("")
  const jwt = localStorage.getItem("jwt")
  const [cName, setCName] = useState("")

  const current_user = JSON.parse(localStorage.getItem('user'))
  console.log(current_user.id)
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

    axios.get(`https://marbles-backend.herokuapp.com/api/v1/users/${current_user.id}`).then(res => {

      console.log(res.data)
      setCName(res.data.name)

    }).catch(err => console.log(err.response))

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

  const ProfilePicDisplayDiv = styled.div`
    background-color: ${props => props.theme.profilePicDisplayDivBg};
  `;

  ProfilePicDisplayDiv.defaultProps = {
    theme: {
      profilePicDisplayDivBg: "#FBD6C8"
    }
  }

  const ProfileLink = styled(Link)`
    background-color: ${props => props.theme.profileLinkBg};
    box-shadow: 0 0 1px 0px ${props => props.theme.profileLinkBoxShadow};
    &: hover {
      color: ${props => props.theme.profileLinkHoverCol};
    };   
    &: active {
      color: ${props => props.theme.profileLinkHoverCol};
    };
  `

  ProfileLink.defaultProps = {
    theme: {
      profileLinkBg: "#FBD6C8",
      profileLinkBoxShadow: "coral",
      profileLinkHoverCol: "coral"
    }
  }

  const ProfileModalHeader = styled(Modal.Header)`
  background-color: ${props => props.theme.profileModalBg};
  `

  ProfileModalHeader.defaultProps = {
    theme: {
      profileModalBg: "lavenderblush"
    }
  }

  const ProfileModalBody = styled(Modal.Body)`
  background-color: ${props => props.theme.profileModalBg};
  `

  ProfileModalBody.defaultProps = {
    theme: {
      profileModalBg: "lavenderblush"
    }
  }

  const ProfileModalFooter = styled(Modal.Body)`
  background-color: ${props => props.theme.profileModalBg};
  `

  ProfileModalFooter.defaultProps = {
    theme: {
      profileModalBg: "lavenderblush"
    }
  }

  const ProfileBackButton = styled(Button)`
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

  ProfileBackButton.defaultProps = {
    theme: {
      encBtnBg: "#FBD6C8",
      encBtnCol: "black",
      encBtnBorder: "#FBA589",
      encBtnBgHover: "#FBA589",
      encBtnColHover: "black",
      encBtnBorderHover: "#FBA589"
    }
  };

  const ChooseFileLabel = styled.label`
    background-color: ${props => props.theme.chooseFileLabelBg};
  `

  ChooseFileLabel.defaultProps = {
    chooseFileLabelBg: "#FBD6C8"
  }

  const ProfileImagePreviewDiv = styled.div`
    background-color: ${props => props.theme.chooseFileLabelBg};
  `

  ProfileImagePreviewDiv.defaultProps = {
    theme: {
      chooseFileLabelBg: "#FBD6C8"
    }
  }

  return (
    <>
      <div className="container" id="profileContainer">
        {/* IF PROFILE IMAGE EXISTS,DISPLAY IT. ELSE, SHOW "+PROFILE". CLICKING BOTH WILL OPEN MODAL */}
        <ProfilePicDisplayDiv className="profilePicDisplay">
          {profileImage ? <img onClick={handleShowModal} className="profileImagePreview" src={`https://marblesbackend.s3-ap-southeast-1.amazonaws.com/${profileImage}`} alt="preview" /> : <h6 onClick={handleShowModal}>+profile</h6>}
        </ProfilePicDisplayDiv>
        <h2>{cName}</h2>
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
        <ProfileLink tag={Link} to="/editprofile" className="profileLink">edit profile</ProfileLink>
        <ProfileLink tag={Link} to="/emergency" className="profileLink">emergency contact</ProfileLink>
        <ProfileLink tag={Link} to="/volunteer" className="profileLink">volunteer</ProfileLink>
        <ProfileLink tag={Link} to="/supportgroup" className="profileLink">how to seek help</ProfileLink>
        <ProfileLink tag={Link} to="/faq" className="profileLink">f.a.q.</ProfileLink>
        <ProfileLink tag={Link} to="/supportgroup" className="profileLink">support group</ProfileLink>
      </div>
      {/* MODAL TO UPDATE PROFILE PIC HERE  */}
      <Modal show={showModal} className="addProfilePicModal">
        <ProfileModalHeader>
          <ProfileBackButton onClick={handleCloseModal} className="profileBackButton">
            back
          </ProfileBackButton>
        </ProfileModalHeader>
        <ProfileModalBody>
          <Modal.Title>
          </Modal.Title>
          <div className="addImageWrap">
            <ProfileImagePreviewDiv className="profileImagePreviewDiv">
              {previewImage ? <img src={previewImage} /> :
                profileImage ? <img className="profileImagePreview2" src={`https://marblesbackend.s3-ap-southeast-1.amazonaws.com/${profileImage}`} alt="preview" /> : <h2>choose a file</h2>}

            </ProfileImagePreviewDiv>
            <input id="addProfileImageInput" type="file" name="image-file" onChange={handleTemplateChange} multiple={false}></input>
            {/* IF NO PROFILE IMAGE EXISTS, DISPLAY PREVIEW IMAGE ONCE CHOSEN BY USER. IF NEITHER EXISTS, DISPLAY THE H2 TEXT*/}
            <ChooseFileLabel for="addProfileImageInput" className="chooseProfileImageButton">choose a file</ChooseFileLabel>
          </div>
        </ProfileModalBody>
        <ProfileModalFooter>
          <ProfileBackButton className="PostProfilePicButton" onClick={handleUpload}>post
                </ProfileBackButton>
        </ProfileModalFooter>
      </Modal>
    </>
  )
}

export default Profile;

// URL FOR PROFILEIMAGE
// src = {`https://marblesbackend.s3-ap-southeast-1.amazonaws.com/${previewImage}`}