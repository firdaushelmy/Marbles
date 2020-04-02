import React, {useState, useEffect} from "react";
import "./AddEmergency.css";
import { Link, useHistory } from "react-router-dom"
import axios from "axios"

function AddEmergency() {
  const [emergencyNumber, setEmergencyNumber] = useState("")
  
  const [emergencyName, setEmergencyName] = useState("")
  
  const [relation, setRelation] = useState("")

  const [email, setEmail] = useState("")
  
  let history = useHistory()

  const currentUser = JSON.parse(localStorage.getItem('user')).id
  
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

  useEffect(() => {
    axios.post(`https://marbles-backend.herokuapp.com/api/v1/emergencies/new/${currentUser}`, {
      'user': currentUser,
      'contact_no' : emergencyNumber,
      'name' : emergencyName,
      'relation' : relation,
      'email' : email

    }).then(response => {
      console.log(response)
      history.push("/emergency")
    })


  }, [emergencyName, emergencyNumber, relation, email])




  return (
    <div className="container d-flex flex-column align-items-center" id="EmergencyContainer">
      <h1>Emergency</h1>
      <form className="EmergencyForm">
        <input type="text" placeholder="Emergency phone number" className="form-control" id="EmergencyInput" onChange={handleNumberChange} value={tempNumber}></input>
        <input type="text" placeholder="Emergency contact name" className="form-control" id="EmergencyInput" onChange={handleNameChange} value={tempName}  ></input>
        <input type="text" placeholder="Emergency email" className="form-control" id="EmergencyInput" onChange={handleEmailChange} value={tempEmail}  ></input>
        <h6 className="EmergencyField">Relation:</h6>
        <select className="form-control" id="EmergencyInput" onChange={handleRelationChange} value={tempRelation}>
          <option>Mother</option>
          <option>Father</option>
          <option>Sibling</option>
          <option>Friend</option>
          <option>Other</option>
        </select>
        <Link ><button type="submit" className="AddEmergency">Add</button></Link>
      </form>
    </div>
  )
}

export default AddEmergency;