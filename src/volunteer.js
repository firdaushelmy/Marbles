import React, { useState } from "react";
import "./volunteer.css";
import { Link } from "react-router-dom";
import { Modal, Button } from "react-bootstrap";
import Image from "react-graceful-image";

function Volunteer() {
  const [show, setShow] = useState(false);
  function handleShow() { setShow(true) };
  function handleClose() { setShow(false) };


  return (
    <>
      <div className="container" id="volunteerDiv">
        <div className="orgLogoImage">
          <Image className="befriendersPic" src={"../befrienders.jpg"}></Image>
        </div>
        <h6 className="brandName">BefriendersKL</h6>
        <h6>helpline volunteer</h6>
        <h6>03-7957-1306</h6>
        <h6>admin@befrienders.org.my</h6>
        <div className="volunteerSocialMediaDiv">
          <Link>
            <h1 className="facebookIcon"><i className="fab fa-facebook"></i><span></span></h1>
          </Link>
          <Link>
            <h1 className="twitterIcon"><i className="fab fa-twitter"></i><span></span></h1>
          </Link>
          <Link>
            <h1 className="instagramIcon"><i className="fab fa-instagram"></i><span></span></h1>
          </Link>
          <h6 className="socialName">BefriendersKL</h6>
        </div>
        <button className="volunteerButton" onClick={handleShow}>
          <Link className="volunteerLink">volunteer</Link>
        </button>
        <h6 className="volunteerTitle">work needed</h6>
        <h6>Lorem ipsum dolor sit amet</h6>
        <h6 className="volunteerTitle">when needed</h6>
        <h6>Lorem ipsum dolor sit amet</h6>
        <h6 className="volunteerTitle">what will be provided (training)</h6>
        <h6>Lorem ipsum dolor sit amet</h6>
      </div>

      <Modal show={show} className="volunteerModal">
        <div className="volunteerModalHeader">
          <button onClick={handleClose} className="volunteerXButton">X</button>
          <h6>you are applying to befrienderskl</h6>
        </div>

        <Modal.Body>
          <input type="text" className="form-control" placeholder="full name" id="volunteerInput"></input>
          <input type="text" className="form-control" placeholder="email address" id="volunteerInput"></input>
          <div className="volunteerPhoneDiv">
            <select id="volunteerInputPhoneCode">
              <option data-countryCode="MY" value="60">Malaysia (+60)</option>
              <option data-countryCode="GB" value="44" Selected>UK (+44)</option>
              <option data-countryCode="US" value="1">USA (+1)</option>
              <option data-countryCode="AU" value="61">Australia (+61)</option>
            </select>
            <input type="tel" placeholder="phone number" id="volunteerInputPhone"></input>
          </div>
          <div id="volunteerCheckBoxContainerDiv">
            <h6 className="volunteerMailDisclaimer">marbles will send your contact details to befrienderskl and let them know of your intention to volunteer. Please give them some time to reach out to your by email and/or phone.</h6>
            <label id="VolunteerCheckboxContainer">
              <input type="checkbox" className="volunteerConsentCheckbox" />
              <span className="checkmark"></span>
              I consent for marbles to send my contact information to this organisation
          </label>
            <button className="letMeVolunteer">let me volunteer!</button>
            <Link className="volunteerCloseBtn" onClick={handleClose}>changed my mind</Link>
          </div>
        </Modal.Body>
      </Modal>
    </>
  )
}

export default Volunteer;