import React, { useState, useEffect } from "react";
import "./editprofile.css";
import { Link, useHistory } from "react-router-dom"
import { Form, Button, Modal } from "react-bootstrap"
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "bootstrap/dist/css/bootstrap.min.css";
import styled, { ThemeProvider, keyframes, withTheme } from 'styled-components';

const Input = styled.input`
      box-shadow: 0 0 5px -1px ${props => props.theme.InputBoxShadow};
    `

function EditProfile() {
    const cID = JSON.parse(localStorage.getItem('user'))
    const currentID = cID.id
    const currentEmail = cID.email
    const currentPassword = cID.password
    const currentName = cID.name
    const currentGender = cID.gender
    const [name, setName] = useState(currentName)
    const [tName, setTName] = useState("")
    const [email, setEmail] = useState(currentEmail)
    const [tEmail, setTEmail] = useState("")
    const [password, setPassword] = useState(currentPassword)
    const [tPassword, setTPassword] = useState("")
    const [gender, setGender] = useState(currentGender)
    const [tGender, setTGender] = useState("")
    let history = useHistory()

    const handleNameChange = e => {
        setName(e.target.value)
        setTName(e.target.value)
    }

    const handlePasswordChange = e => {
        setPassword(e.target.value)
        setTPassword(e.target.value)
    }

    const handleEmailChange = e => {
        setEmail(e.target.value)
        setTEmail(e.target.value)
    }

    const handleGenderChange = e => {
        setGender(e.target.value)
        setTGender(e.target.value)
    }

    const handleSubmit = e => {

        e.preventDefault()
        axios.post(`https://marbles-backend.herokuapp.com/api/v1/users/${currentID}`, {
            'name': name,
            'email': email,
            'gender': gender,
            'password': password,
        }).then(response => {
            console.log(response.data)
            toast.success("You have successfully edited your profile details");
            history.push("/profile")
        })
    }

    const EditProfileDiv = styled.div`
    background-color: ${props => props.theme.emergencyPinkDivBg};
  `;

    EditProfileDiv.defaultProps = {
        theme: {
            emergencyPinkDivBg: "rgb(250, 229, 223)"
        }
    };

    const SubmitButton = styled.button`
    background-color: ${props => props.theme.emergencyPinkDivBg};
  `;

    SubmitButton.defaultProps = {
        theme: {
            emergencyPinkDivBg: "rgb(250, 229, 223)"
        }
    };


    Input.defaultProps = {
        theme: {
            InputBoxShadow: "#FBA589"
        }
    }


    return (
        <div className="container" id="editProfileContainer">
            <EditProfileDiv className="editProfileDiv">edit details</EditProfileDiv>
            <form onSubmit={handleSubmit}>

                <input className="editProfileInput" onChange={handleNameChange} type="text" placeholder={"change your name here"} value={tName} />

                <input className="editProfileInput" onChange={handleEmailChange} type="text" placeholder="change your email here" value={tEmail} />

                <input className="editProfileInput" onChange={handlePasswordChange} type="text" placeholder="change your password here" value={tPassword} />

                <input className="editProfileInput" onChange={handleGenderChange} type="text" placeholder="change your gender here" value={tGender} />

                <SubmitButton className="editProfileSubmitButton" type="button submit">submit
            </SubmitButton>
            </form>
        </div>
    )
}

export default EditProfile
