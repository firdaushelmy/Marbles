import React, { useState, useEffect } from "react";
import "./AddEmergency.css";
import { Link, useHistory } from "react-router-dom"
import axios from "axios"
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import styled, { ThemeProvider, keyframes, withTheme } from 'styled-components';

function AddEmergency() {
  const [emergencyNumber, setEmergencyNumber] = useState("")
  const [emergencyName, setEmergencyName] = useState("")
  const [relation, setRelation] = useState("")
  const [email, setEmail] = useState("")
  let history = useHistory()
  const currentUser = JSON.parse(localStorage.getItem('user'))
  console.log(currentUser.id)
  const [tempNumber, setTempNumber] = useState("")
  const [tempName, setTempName] = useState("")
  const [tempRelation, setTempRelation] = useState("")
  const [tempEmail, setTempEmail] = useState("")


  const handleNumberChange = (e) => {
    setEmergencyNumber(e.target.value)
    setTempNumber(e.target.value)

  }

  const handleNameChange = (e) => {
    setEmergencyName(e.target.value)
    setTempName(e.target.value)
  }

  const handleRelationChange = (e) => {
    console.log(e.target.value)
    setRelation(e.target.value)
    setTempRelation(e.target.value)
  }

  const handleEmailChange = (e) => {
    setEmail(e.target.value)
    setTempEmail(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    axios.post(`https://marbles-backend.herokuapp.com/api/v1/emergencies/new/${currentUser.id}`, {
      'user': currentUser.id,
      'contact_no': emergencyNumber,
      'name': emergencyName,
      'relation': relation,
      'email': email

    }).then(response => {
      console.log(response)
      toast.success("You have successfully added an emergency contact");
      history.push("/emergency")
    })
  };

  const AddEmergency = styled.button`
    background-color: ${props => props.theme.emergencyPinkDivBg};
  `;

  AddEmergency.defaultProps = {
    theme: {
      emergencyPinkDivBg: "rgb(250, 229, 223)"
    }
  };

  const EmergencyInput = styled.input`
    box-shadow: 0 0 5px -1px ${props => props.theme.emergencyInputBoxShadow};
    &:focus {
      box-shadow: 0 0 7px -1px ${props => props.theme.emergencyInputBoxShadowFocus};
    };
`

  EmergencyInput.defaultProps = {
    theme: {
      emergencyInputBoxShadow: "#FBA589",
      emergencyInputBoxShadowFocus: "#FBD6C8"
    }
  }

  const EmergencySelect = styled.select`
    box-shadow: 0 0 5px -1px ${props => props.theme.emergencyInputBoxShadow};
    &:focus {
      box-shadow: 0 0 7px -1px ${props => props.theme.emergencyInputBoxShadowFocus};
    };
`

  EmergencyInput.defaultProps = {
    theme: {
      emergencyInputBoxShadow: "#FBA589",
      emergencyInputBoxShadowFocus: "#FBD6C8"
    }
  }

  return (
    <div className="container d-flex flex-column align-items-center" id="emergencyContainer">
      <h1>Emergency</h1>
      <form className="emergencyForm" onSubmit={handleSubmit}>
        <EmergencyInput type="text" placeholder="Emergency phone number" className="form-control" id="emergencyInput" onChange={handleNumberChange} value={tempNumber}></EmergencyInput>
        <EmergencyInput type="text" placeholder="Emergency contact name" className="form-control" id="emergencyInput" onChange={handleNameChange} value={tempName}  ></EmergencyInput>
        <EmergencyInput type="text" placeholder="Emergency email" className="form-control" id="emergencyInput" onChange={handleEmailChange} value={tempEmail}  ></EmergencyInput>
        <h6 className="emergencyField">Relation:</h6>
        <EmergencySelect className="form-control" id="emergencyInput" onChange={handleRelationChange} value={tempRelation}>
          <option>--Choose an option--</option>
          <option>Mother</option>
          <option>Father</option>
          <option>Sibling</option>
          <option>Friend</option>
          <option>Other</option>
        </EmergencySelect>
        <AddEmergency type="submit" className="addEmergency">Add</AddEmergency>
      </form>
    </div>
  )
}

export default AddEmergency;