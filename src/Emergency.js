import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./Emergency.css";
import styled, { ThemeProvider, keyframes, withTheme } from 'styled-components';

function Emergency() {
  const [emerCont, setEmerCont] = useState([])
  const cUser = JSON.parse(localStorage.getItem("user"));
  const currentID = cUser.id
  useEffect(() => {
    axios.get(`https://marbles-backend.herokuapp.com/api/v1/emergencies/${currentID}`).then(response => {
      console.log(response.data)
      setEmerCont(response.data)
    });
  }, []);

  const EmergencyPinkDiv = styled.div`
    background-color: ${props => props.theme.emergencyPinkDivBg};
  `;

  EmergencyPinkDiv.defaultProps = {
    theme: {
      emergencyPinkDivBg: "rgb(250, 229, 223)"
    }
  };

  const AddEmergencyButton = styled.button`
    background-color: ${props => props.theme.emergencyPinkDivBg};
  `;

  AddEmergencyButton.defaultProps = {
    theme: {
      emergencyPinkDivBg: "rgb(250, 229, 223)"
    }
  };

  return (
    <div className="emergencyDiv">
      <div className="container" id="emergencyStuffContainer">
        <EmergencyPinkDiv className="emergencyPinkDiv">
          <h6>emergency contacts</h6>
        </EmergencyPinkDiv>
        {
          emerCont.length > 0
            ? emerCont.map(cont => {
              return (
                <div>

                  <h3> {cont.name} </h3>
                  <h3> {cont.contact_no} </h3>
                  <h3> {cont.relation} </h3>
                </div>

              )
            }) : ""}
        <div>

          <h6>marbles will send an sms to all 5 of your emergency contacts when you click on the panic button</h6>
        </div>

        <Link tag={Link} to="/addemergency" className="addEmergencyButton">
          <AddEmergencyButton className="addEmergencyButtonDiv">add emergency contact</AddEmergencyButton>
        </Link>
      </div>
    </div>
  )
}

export default Emergency;