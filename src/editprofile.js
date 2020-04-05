import React, { useState, useEffect } from "react";
import "./editprofile.css";
import { Link, useHistory } from "react-router-dom"
import { Form, Button, Modal } from "react-bootstrap"
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "bootstrap/dist/css/bootstrap.min.css";

function EditProfile () {
    const [name , setName] = useState("")
    const [tName, setTName] = useState("")
    const [email, setEmail] = useState("")
    const [tEmail, setTEmail] = useState("")
    const [password, setPassword] = useState("")
    const [tPassword, setTPassword] = useState("")
    const [gender, setGender] = useState("")
    const [tGender, setTGender] = useState("")
    const cID = JSON.parse(localStorage.getItem('user'))
    const currentID = cID.id
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
            toast.success("You have successfully added an emergency contact");
            history.push("/profile")
        })
    }

    return (
        <div className="d-flex justify-content-center mx-auto">
            <form onSubmit={handleSubmit}>
            <div>

            <input onChange={handleNameChange} type="text" placeholder="Change your name here" value={tName}>
            
            </input>
            </div>
            <div>

            <input onChange={handleEmailChange} type="text" placeholder="Change your email here" value={tEmail}></input>
            </div>
            <div>

            <input onChange={handlePasswordChange} type="text" placeholder="Change your password here" value={tPassword}></input>
            </div>
            <div>

            <input onChange={handleGenderChange} type="text" placeholder="Change your gender here" value={tGender}></input>
            </div>
            <button className="btn btn-outline-primary outline-0"type="button submit">
                Submit
            </button>
            </form>
        </div>
    )
}

export default EditProfile
