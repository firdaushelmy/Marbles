import React, { useState } from "react";
import "./volunteer.css";
import { Link } from "react-router-dom";
import { Modal, Button } from "react-bootstrap";
import Image from "react-graceful-image";
import styled, { ThemeProvider, keyframes, withTheme } from 'styled-components';

const VolunteerInput = styled.input`
    box-shadow: 0 0 5px -1px ${props => props.theme.emergencyInputBoxShadow};
    &:focus {
      box-shadow: 0 0 7px -1px ${props => props.theme.emergencyInputBoxShadowFocus};
    };
`

function Volunteer() {
  const [show, setShow] = useState(false);
  function handleShow() { setShow(true) };
  function handleClose() { setShow(false) };

  const OrgLogoDiv = styled.div`
    background-color: ${props => props.theme.orgLogoDivBg};
  `;

  OrgLogoDiv.defaultProps = {
    theme: {
      orgLogoDivBg: "#FBD6C8"
    }
  }

  const VolunteerButton = styled(Button)`
     background-color: ${props => props.theme.encBtnBg};
     color: ${props => props.theme.encBtnCol};
      border: 2px solid ${props => props.theme.encBtnBorder};
     &:hover {
      background-color: ${props => props.theme.encBtnBgHover};
      color: ${props => props.theme.encBtnColHover};
      border: 2px solid ${props => props.theme.encBtnBorderHover};
      &:active {
      background-color: ${props => props.theme.encBtnBgHover};
      color: ${props => props.theme.encBtnColHover};
      border: 2px solid ${props => props.theme.encBtnBorderHover};
     }
`;

  VolunteerButton.defaultProps = {
    theme: {
      encBtnBg: "#FBD6C8",
      encBtnCol: "black",
      encBtnBorder: "#FBA589",
      encBtnBgHover: "#FBA589",
      encBtnColHover: "black",
      encBtnBorderHover: "#FBA589"
    }
  };

  const VolunteerH1 = styled.h1`
  color: ${props => props.theme.volunteerH1Col};
  `

  VolunteerH1.defaultProps = {
    volunteerH1Col: "#FBA589"
  }

  const VolunteerLink = styled(Link)`
  color: ${props => props.theme.volunteerLinkCol};
  &: hover {
    color: ${props => props.theme.volunteerLinkHoverCol};
  };
  &: active {
    color: ${props => props.theme.volunteerLinkHoverCol};
  };
  `;

  VolunteerLink.defaultProps = {
    theme: {
      volunteerLinkCol: "black",
      volunteerLinkHoverCol: "white"
    }
  }

  const VolunteerModalDiv = styled.div`
  background-color: ${props => props.theme.volunteerModalDivBg};
  color: ${props => props.theme.volunteerModalDivCol};

  `;

  VolunteerModalDiv.defaultProps = {
    theme: {
      volunteerModalDivBg: "#FBD6C8",
      volunteerModalDivCol: "#584646"
    }
  }

  VolunteerInput.defaultProps = {
    theme: {
      emergencyInputBoxShadow: "#FBA589",
      emergencyInputBoxShadowFocus: "#FBD6C8"
    }
  }

  const VolunteerSelect = styled.select`
    box-shadow: 0 0 5px -1px ${props => props.theme.emergencyInputBoxShadow};
    &:focus {
      box-shadow: 0 0 7px -1px ${props => props.theme.emergencyInputBoxShadowFocus};
    };
`

  VolunteerSelect.defaultProps = {
    theme: {
      emergencyInputBoxShadow: "#FBA589",
      emergencyInputBoxShadowFocus: "#FBD6C8"
    }
  }

  return (
    <>
      <div className="container" id="volunteerDiv">
        <OrgLogoDiv className="orgLogoImage">
          <Image className="befriendersPic" src={"../befrienders.jpg"}></Image>
        </OrgLogoDiv>
        <h6 className="brandName">BefriendersKL</h6>
        <h6>helpline volunteer</h6>
        <h6>03-7957-1306</h6>
        <h6>admin@befrienders.org.my</h6>
        <div className="volunteerSocialMediaDiv">
          <Link>
            <VolunteerH1 className="facebookIcon"><i className="fab fa-facebook"></i><span></span></VolunteerH1>
          </Link>
          <Link>
            <VolunteerH1 className="twitterIcon"><i className="fab fa-twitter"></i><span></span></VolunteerH1>
          </Link>
          <Link>
            <VolunteerH1 className="instagramIcon"><i className="fab fa-instagram"></i><span></span></VolunteerH1>
          </Link>
          <h6 className="socialName">BefriendersKL</h6>
        </div>
        <VolunteerButton className="volunteerButton" onClick={handleShow}>
          <VolunteerLink className="volunteerLink">volunteer</VolunteerLink>
        </VolunteerButton>
        <h6 className="volunteerTitle">work needed</h6>
        <h6>Lorem ipsum dolor sit amet</h6>
        <h6 className="volunteerTitle">when needed</h6>
        <h6>Lorem ipsum dolor sit amet</h6>
        <h6 className="volunteerTitle">what will be provided (training)</h6>
        <h6>Lorem ipsum dolor sit amet</h6>
      </div>

      <Modal show={show} className="volunteerModal">
        <VolunteerModalDiv className="volunteerModalHeader">
          <h6>you are applying to befrienderskl</h6>
        </VolunteerModalDiv>

        <Modal.Body>
          <VolunteerInput type="text" className="form-control" placeholder="full name" id="volunteerInput"></VolunteerInput>
          <VolunteerInput type="text" className="form-control" placeholder="email address" id="volunteerInput"></VolunteerInput>
          <div className="volunteerPhoneDiv">
            <VolunteerSelect id="volunteerInputPhoneCode">
              <option data-countryCode="MY" value="60">Malaysia (+60)</option>
              <option data-countryCode="GB" value="44" Selected>UK (+44)</option>
              <option data-countryCode="US" value="1">USA (+1)</option>
              <option data-countryCode="AU" value="61">Australia (+61)</option>
            </VolunteerSelect>
            <VolunteerInput type="tel" placeholder="phone number" id="volunteerInputPhone"></VolunteerInput>
          </div>
          <div id="volunteerCheckBoxContainerDiv">
            <h6 className="volunteerMailDisclaimer">marbles will send your contact details to befrienderskl and let them know of your intention to volunteer. Please give them some time to reach out to your by email and/or phone.</h6>
            <label id="VolunteerCheckboxContainer">
              <input type="checkbox" className="volunteerConsentCheckbox" />
              <span className="checkmark"></span>
              I consent for marbles to send my contact information to this organisation
          </label>
            <VolunteerButton className="letMeVolunteer">let me volunteer!</VolunteerButton>
            <Link className="volunteerCloseBtn" onClick={handleClose}>changed my mind</Link>
          </div>
        </Modal.Body>
      </Modal>
    </>
  )
}

export default Volunteer;