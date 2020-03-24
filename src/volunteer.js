import React, { useState } from "react";
import "./volunteer.css";
import { Link } from "react-router-dom";
import { Modal, Button } from "react-bootstrap";

function Volunteer() {
  const [show, setShow] = useState(false);
  function handleShow() { setShow(true) };
  function handleClose() { setShow(false) };


  return (
    <>
      <div className="container" id="VolunteerDiv">
        <div className="OrgLogoImage"></div>
        <h6 className="BrandName">BefriendersKL</h6>
        <h6>helpline volunteer</h6>
        <h6>03-7957-1306</h6>
        <h6>admin@befrienders.org.my</h6>
        <div className="VolunteerSocialMediaDiv">
          <Link>
            <h1 className="FacebookIcon"><i className="fab fa-facebook"></i><span></span></h1>
          </Link>
          <Link>
            <h1 className="TwitterIcon"><i className="fab fa-twitter"></i><span></span></h1>
          </Link>
          <Link>
            <h1 className="InstagramIcon"><i className="fab fa-instagram"></i><span></span></h1>
          </Link>
          <h6 className="SocialName">BefriendersKL</h6>
        </div>
        <button className="VolunteerButton" onClick={handleShow}>
          <Link className="VolunteerLink">volunteer</Link>
        </button>
        <h6 className="VolunteerTitle">work needed</h6>
        <h6>Lorem ipsum dolor sit amet</h6>
        <h6 className="VolunteerTitle">when needed</h6>
        <h6>Lorem ipsum dolor sit amet</h6>
        <h6 className="VolunteerTitle">what will be provided (training)</h6>
        <h6>Lorem ipsum dolor sit amet</h6>
      </div>

      <Modal show={show} className="VolunteerModal">
        <div className="VolunteerModalHeader">
          <button onClick={handleClose} className="VolunteerXButton">X</button>
          <h6>you are applying to befrienderskl</h6>
        </div>

        <Modal.Body>
          <input type="text" className="form-control" placeholder="full name" id="VolunteerInput"></input>
          <input type="text" className="form-control" placeholder="email address" id="VolunteerInput"></input>
          <div className="VolunteerPhoneDiv">
            <select id="VolunteerInputPhoneCode">
              <option data-countryCode="MY" value="60">Malaysia (+60)</option>
              <option data-countryCode="GB" value="44" Selected>UK (+44)</option>
              <option data-countryCode="US" value="1">USA (+1)</option>
              <option data-countryCode="AU" value="61">Australia (+61)</option>
            </select>
            <input type="tel" placeholder="phone number" id="VolunteerInputPhone"></input>
          </div>
          <div id="VolunteerCheckBoxContainerDiv">
            <h6 className="VolunteerMailDisclaimer">marbles will send your contact details to befrienderskl and let them know of your intention to volunteer. Please give them some time to reach out to your by email and/or phone.</h6>
            <label id="VolunteerCheckboxContainer">
              <input type="checkbox" className="VolunteerConsentCheckbox" />
              <span className="checkmark"></span>
              I consent for marbles to send my contact information to this organisation
          </label>
            <button className="LetMeVolunteer">let me volunteer!</button>
            <Link className="VolunteerCloseBtn" onClick={handleClose}>changed my mind</Link>
          </div>
        </Modal.Body>
      </Modal>
    </>
  )
}

export default Volunteer;