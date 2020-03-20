import React from "react";
import { Link } from "react-router-dom";
import "./Emergency.css"

function Emergency() {
  return (
    <div className="EmergencyDiv">
      <div className="EmergencyPinkDiv">
        <h6>emergency contacts</h6>
      </div>
      <div className="container" id="EmergencyStuffContainer">
        <h3>Contact Name</h3>
        <h3>+60172773787</h3>
        <h6>marbles will send an sms to all 5 of your emergency contacts when you click on the panic button</h6>

        <Link tag={Link} to="/addemergency" className="AddEmergencyButton"><button className="AddEmergencyButtonDiv">add emergency contact</button></Link>
      </div>
    </div>
  )
}

export default Emergency;