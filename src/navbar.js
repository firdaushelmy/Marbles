import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import { Navbar, Button, Modal } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import DelayLink from "./DelayLink";
import Threads from "./components/threads.js";
import styled, { ThemeProvider, keyframes, withTheme } from 'styled-components';
import PanicSVGIcon from "./panicSVGIcon";

function Nav() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [show2, setShow2] = useState(false);
  const handleClose2 = () => setShow2(false);
  const handleShow2 = () => setShow2(true);
  const [show3, setShow3] = useState(false);
  const handleClose3 = () => setShow3(false);
  const handleShow3 = () => setShow3(true);
  const [loggedIn, setLoggedIn] = useState(
    localStorage.getItem("jwt") !== null
  );
  function loggedOut() {
    localStorage.removeItem("jwt");
    setLoggedIn(false);
  }

  const StyledNavbar = styled(Navbar)`
  background-color: ${props => props.theme.navBg};
`;

  StyledNavbar.defaultProps = {
    theme: {
      navBg: "rgb(250, 229, 223)",
    }
  };

  const AddButton = styled(Button)`
     background-color: ${props => props.theme.btnBg};
     color: ${props => props.theme.btnCol};
     &:hover {
      background-color: ${props => props.theme.btnBgHover};
      color: ${props => props.theme.btnColHover};
     }
`;

  AddButton.defaultProps = {
    theme: {
      btnBg: "#FBA589",
      btnCol: "white"
    }
  };

  const AccountInfoLink = styled(Link)`
    color: ${props => props.theme.linkCol}
  `;

  AccountInfoLink.defaultProps = {
    theme: {
      linkCol: "coral"
    }
  };

  const BottomNavbarLink = styled(Link)`
    &: hover {
      color: ${props => props.theme.linkCol};
    };
    &: focus {
      color: ${props => props.theme.linkCol};
    };
  `;

  BottomNavbarLink.defaultProps = {
    theme: {
      linkCol: "coral"
    }
  };

  const PinkHoverDiv = styled.div`
    &:hover{
    background-color: ${props => props.theme.phdBg}};
    &:active {
    background-color: ${props => props.theme.phdBg}
    };
  `;

  PinkHoverDiv.defaultProps = {
    theme: {
      phdBg: "#FBD6C8"
    }
  };

  const XButton = styled.button`
    color: ${props => props.theme.xBtnCol}
  `;

  XButton.defaultProps = {
    theme: {
      xBtnCol: "coral"
    }
  };

  const BarsModalDiv = styled.div`
    color: ${props => props.theme.barsModalDivCol}
  `;

  BarsModalDiv.defaultProps = {
    theme: {
      barsModalDivCol: "#747779"
    }
  };

  const AddPostModalHeader = styled(Modal.Header)`
  background-color: ${props => props.theme.homeModalBg};
  `

  AddPostModalHeader.defaultProps = {
    theme: {
      homeModalBg: "rgb(250, 228, 220)"
    }
  }

  const AddPostModalBody = styled(Modal.Body)`
  background-color: ${props => props.theme.homeModalBg};
  `

  AddPostModalBody.defaultProps = {
    theme: {
      homeModalBg: "rgb(250, 228, 220)"
    }
  }

  const BottomNavbar = styled.div`
    background-color: ${props => props.theme.navBg};
  `;

  BottomNavbar.defaultProps = {
    theme: {
      navBg: "rgb(250, 229, 223)"
    }
  };

  return (
    <>
      <StyledNavbar className="navbar">
        <Navbar.Brand>
          <div onClick={handleShow2} className="addButton">
            <AddButton className="actualAddButton">Add</AddButton>
          </div>
        </Navbar.Brand>
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            <AccountInfoLink tag={Link} to="/home">
              <img className="logoNoMarbles" src="./logo_no_marbles.png" />
            </AccountInfoLink>
          </Navbar.Text>
        </Navbar.Collapse>
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            <BarsModalDiv onClick={handleShow} className="barsModalButton">
              <i className="fa fa-bars" id="barsModalButtonIcon"></i>
              <span></span>
            </BarsModalDiv>
          </Navbar.Text>
        </Navbar.Collapse>
      </StyledNavbar>

      <Modal className="navModal" show={show2}>
        <Modal.Header>
          <XButton onClick={handleClose2} className="barsModalButton2">
            X
          </XButton>
        </Modal.Header>
        <Modal.Body>
          <Modal.Title id="modalLinkDiv">
            <PinkHoverDiv className="pinkHoverDiv">
              <AccountInfoLink className="accountInfoLink" onClick={handleShow3}>
                add post
              </AccountInfoLink>
            </PinkHoverDiv>

            <PinkHoverDiv className="pinkHoverDiv"><AccountInfoLink
              className="accountInfoLink"
              tag={Link}
              to="/addthoughts"
              onClick={handleClose2}
            >
              add thoughts
            </AccountInfoLink>
            </PinkHoverDiv>
            <PinkHoverDiv className="pinkHoverDiv"><AccountInfoLink
              className="accountInfoLink"
              tag={Link}
              to="/playlist"
              onClick={handleClose2}
            >
              playlist
            </AccountInfoLink>
            </PinkHoverDiv>
          </Modal.Title>
        </Modal.Body>
      </Modal>

      <Modal className="navModal" show={show}>
        <Modal.Header>
          <XButton onClick={handleClose} className="modalButtonX">
            X
          </XButton>
        </Modal.Header>
        <Modal.Body>
          <Modal.Title id="modalLinkDiv">
            <PinkHoverDiv className="pinkHoverDiv">
              <AccountInfoLink className="accountInfoLink" tag={Link} to="/mood" onClick={handleClose}>change emotion</AccountInfoLink>
            </PinkHoverDiv>
            <PinkHoverDiv className="pinkHoverDiv">
              <AccountInfoLink className="accountInfoLink" tag={Link} to="/panic" onClick={handleClose}>panic button</AccountInfoLink>
            </PinkHoverDiv>
            <PinkHoverDiv className="pinkHoverDiv">
              <AccountInfoLink className="accountInfoLink" tag={Link} to="/emergency" onClick={handleClose}>emergency</AccountInfoLink>
            </PinkHoverDiv>
            <PinkHoverDiv className="pinkHoverDiv">
              <AccountInfoLink className="accountInfoLink" tag={Link} to="/clicker" onClick={handleClose}>marble clicker</AccountInfoLink>
            </PinkHoverDiv>
            <PinkHoverDiv className="pinkHoverDiv">
              <AccountInfoLink className="accountInfoLink" tag={Link} to="/profile" onClick={handleClose}>profile</AccountInfoLink>
            </PinkHoverDiv>
            <PinkHoverDiv className="pinkHoverDiv">
              <AccountInfoLink className="accountInfoLink" tag={Link} to="/volunteer" onClick={handleClose}>volunteer</AccountInfoLink>
            </PinkHoverDiv>
            <PinkHoverDiv className="pinkHoverDiv">
              <AccountInfoLink className="accountInfoLink" tag={Link} to="/supportgroup" onClick={handleClose}>support group</AccountInfoLink>
            </PinkHoverDiv>
            <PinkHoverDiv className="pinkHoverDiv">
              <AccountInfoLink className="accountInfoLink" tag={Link} to="/faq" onClick={handleClose}>f.a.q.</AccountInfoLink>
            </PinkHoverDiv>
            <PinkHoverDiv className="pinkHoverDiv">
              <AccountInfoLink className="accountInfoLink">privacy policy</AccountInfoLink>
            </PinkHoverDiv>
          </Modal.Title>
        </Modal.Body>
      </Modal>

      <Modal className="imagePreviewModal" show={show3}>
        <AddPostModalHeader>
          <button onClick={handleClose3} className="modalButtonX">
            X
          </button>
        </AddPostModalHeader>
        <AddPostModalBody>
          <Modal.Title>
            <Threads />
          </Modal.Title>
        </AddPostModalBody>
      </Modal>

      <BottomNavbar className="bottomNavbar">
        <BottomNavbarLink className="bottomNavbarLink" tag={Link} to="/emergency">
          <i className="fas fa-bell"></i><span></span>
        </BottomNavbarLink>
        <BottomNavbarLink className="bottomNavbarLink" tag={Link} to="/supportgroup">
          <i className="fas fa-map-marked-alt"></i><span></span>
        </BottomNavbarLink>
        <div className="panicSVGIcon">
          <BottomNavbarLink className="bottomNavbarLink" tag={Link} to="/panic">
            <PanicSVGIcon />
          </BottomNavbarLink>
        </div>
        <BottomNavbarLink className="bottomNavbarLink" tag={Link} to="/home">
          <i className="fas fa-home"></i><span></span>
        </BottomNavbarLink>
        <BottomNavbarLink className="bottomNavbarLink" tag={Link} to="/profile">
          <i className="fas fa-user-circle"></i><span></span>
        </BottomNavbarLink>
      </BottomNavbar>

    </>
  );
}

export default Nav;
