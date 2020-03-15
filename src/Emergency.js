import React from "react";
import "./Emergency.css";

function Emergency() {
  return (
    <div className="container d-flex flex-column align-items-center" id="EmergencyContainer">
      <h1>Emergency</h1>
      <form className="EmergencyForm">
        <h6 className="EmergencyField">Number:</h6>
        <input type="text" placeholder="Emergency phone number"></input>
        <h6 className="EmergencyField">Name:</h6>
        <input type="text" placeholder="Emergency contact name"></input>
        <h6 className="EmergencyField">Relation:</h6>
        <select>
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