import React from "react";
import "./AddEmergency.css";
import { Link } from "react-router-dom"

function AddEmergency() {
  return (
    <div className="container d-flex flex-column align-items-center" id="emergencyContainer">
      <h1>Emergency</h1>
      <form className="emergencyForm">
        <input type="text" placeholder="Emergency phone number" className="form-control" id="emergencyInput"></input>
        <input type="text" placeholder="Emergency contact name" className="form-control" id="emergencyInput"></input>
        <h6 className="emergencyField">Relation:</h6>
        <select className="form-control" id="emergencyInput">
          <option>Mother</option>
          <option>Father</option>
          <option>Sibling</option>
          <option>Friend</option>
          <option>Other</option>
        </select>
        <Link tag={Link} to="/emergency"><button type="submit" className="addEmergency">Add</button></Link>
      </form>
    </div>
  )
}

export default AddEmergency;