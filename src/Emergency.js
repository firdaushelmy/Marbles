import React from "react";
import "./Emergency.css";

function Emergency() {
  return (
    <div className="container d-flex flex-column align-items-center" id="EmergencyContainer">
      <h1>Emergency</h1>
      <form className="EmergencyForm">
        <input type="text" placeholder="Emergency phone number" className="form-control" id="EmergencyInput"></input>
        <input type="text" placeholder="Emergency contact name" className="form-control" id="EmergencyInput"></input>
        <h6 className="EmergencyField">Relation:</h6>
        <select className="form-control" id="EmergencyInput">
          <option>Mother</option>
          <option>Father</option>
          <option>Sibling</option>
          <option>Friend</option>
          <option>Other</option>
        </select>
        <button type="submit" className="AddEmergency">Add</button>
      </form>
    </div>
  )
}

export default Emergency;