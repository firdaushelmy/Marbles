import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./navbar.css";
import { Navbar } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import DelayLink from "./DelayLink";

function Nav() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [show2, setShow2] = useState(false);
  const handleClose2 = () => setShow2(false);
  const handleShow2 = () => setShow2(true);
  const [loggedIn, setLoggedIn] = useState(
    localStorage.getItem("jwt") !== null
  );
  function loggedOut() {
    localStorage.removeItem("jwt");
    setLoggedIn(false);
  }

  return (
    <>
      <Navbar className="navbar">
        <Navbar.Brand>
          <div onClick={handleShow2} className="addButton">
            +
          </div>
        </Navbar.Brand>
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            <Link tag={Link} to="/home">
              <img className="logoNoMarbles" src="./logo_no_marbles.png" />
            </Link>
          </Navbar.Text>
        </Navbar.Collapse>
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            <div onClick={handleShow} className="barsModalButton">
              <i className="fa fa-bars" id="barsModalButtonIcon"></i>
              <span></span>
            </div>
          </Navbar.Text>
        </Navbar.Collapse>
      </Navbar>

      <Modal className="navModal" show={show2}>
        <Modal.Header>
          <button onClick={handleClose2} className="barsModalButton2">
            X
          </button>
        </Modal.Header>
        <Modal.Body>
          <Modal.Title id="modalLinkDiv">
            <div className="pinkHoverDiv"><Link
              className="accountInfoLink"
              tag={Link}
              to="/threads"
              onClick={handleClose2}
            >
              add post
            </Link>
            </div>

            <div className="pinkHoverDiv"><Link
              className="accountInfoLink"
              tag={Link}
              to="/addthoughts"
              onClick={handleClose2}
            >
              add thoughts
            </Link>
            </div>
            <div className="pinkHoverDiv"><Link
              className="accountInfoLink"
              tag={Link}
              to="/playlist"
              onClick={handleClose2}
            >
              playlist
            </Link>
            </div>
          </Modal.Title>
        </Modal.Body>
      </Modal>

      <Modal className="navModal" show={show}>
        <Modal.Header>
          <button onClick={handleClose} className="modalButtonX">
            X
          </button>
        </Modal.Header>
        <Modal.Body>
          <Modal.Title id="modalLinkDiv">
            <div className="pinkHoverDiv">
              <Link className="accountInfoLink" tag={Link} to="/mood" onClick={handleClose}>change emotion</Link>
            </div>
            <div className="pinkHoverDiv">
              <Link className="accountInfoLink" tag={Link} to="/panic" onClick={handleClose}>panic button</Link>
            </div>
            <div className="pinkHoverDiv">
              <Link className="accountInfoLink" tag={Link} to="/emergency" onClick={handleClose}>emergency</Link>
            </div>
            <div className="pinkHoverDiv">
              <Link className="accountInfoLink" tag={Link} to="/clicker" onClick={handleClose}>marble clicker</Link>
            </div>
            <div className="pinkHoverDiv">
              <Link className="accountInfoLink" tag={Link} to="/profile" onClick={handleClose}>profile</Link>
            </div>
            <div className="pinkHoverDiv">
              <Link className="accountInfoLink" tag={Link} to="/volunteer" onClick={handleClose}>volunteer</Link>
            </div>
            <div className="pinkHoverDiv">
              <Link className="accountInfoLink" tag={Link} to="/supportgroup" onClick={handleClose}>support group</Link>
            </div>
            <div className="pinkHoverDiv">
              <Link className="accountInfoLink" tag={Link} to="/faq" onClick={handleClose}>f.a.q.</Link>
            </div>
            <div className="pinkHoverDiv">
              <Link className="accountInfoLink">privacy policy</Link>
            </div>
          </Modal.Title>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Nav;
