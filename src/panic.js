import React, { useState, useEffect } from "react";
import "./panic.css";
import axios from "axios";
import PanicSVG from "./panicSVG.js";
import styled, { ThemeProvider, keyframes, withTheme } from 'styled-components';
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Panic() {
  const [emerCont, setEmerCont] = useState([])
  const cUser = JSON.parse(localStorage.getItem("user"));
  const currentID = cUser.id
  useEffect(() => {
    axios.get(`https://marbles-backend.herokuapp.com/api/v1/emergencies/${currentID}`).then(response => {
      console.log(response.data)
      setEmerCont(response.data)
    });
  }, []);

  const PanicButtonContactDiv = styled.div`
    background-color: ${props => props.theme.panicButtonContactDivBg}
  `

  PanicButtonContactDiv.defaultProps = {
    theme: {
      panicButtonContactDivBg: "#FBD6C8"
    }
  }
  const cuID = JSON.parse(localStorage.getItem('user'))
  const cID = cuID.id
  const handleMailgun = (e) => {
    e.preventDefault()
    axios.post(`https://marbles-backend.herokuapp.com/api/v1/emergencies/panic/${cID}`).then(res => {
      console.log(res.data)
      toast.success("Please calm down! Emergency contact has been notify about the button press")
    })
  }

  return (
    <div className="container" id="panicSurrounding">
      <button className="panic" >
        <PanicSVG onClick={handleMailgun} />
      </button>
      <div className="container">
        <div className="panicDisclaimer">marbles will send an emergency sms to registered emergency contacts</div>
        {
          emerCont.length > 0
            ? emerCont.map(cont => {
              return (
                <PanicButtonContactDiv className="panicButtonContact">
                  <h3> {cont.name} </h3>
                  <h3> {cont.contact_no} </h3>
                  <h3> {cont.relation} </h3>
                </PanicButtonContactDiv>

              )
            }) : ""}
        )
      }
      
export default Panic;