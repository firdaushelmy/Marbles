import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./navbar.css";
import { Navbar } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

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
      <Navbar className="Navbar">
        <Navbar.Brand>
          <div onClick={handleShow2} className="AddButton">
            +
          </div>
        </Navbar.Brand>
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            <Link tag={Link} to="/home">
              <img className="LogoNoMarbles" src="./logo_no_marbles.png" />
            </Link>
          </Navbar.Text>
        </Navbar.Collapse>
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            <div onClick={handleShow} className="barsModalButton">
              <i className="fa fa-bars"></i>
              <span></span>
            </div>
          </Navbar.Text>
        </Navbar.Collapse>
      </Navbar>

      <Modal className="NavModal" show={show2}>
        <Modal.Header className="closebarsModalButton2">
          <button onClick={handleClose2} className="barsModalButton2">
            X
          </button>
          {/* <div
            onClick={handleClose2}
            className="d-flex justify-content-center btn btn-outline-secondary border-0 barsModalButton2"
            outline
            color="warning"
          >
            X
          </div> */}
        </Modal.Header>
        <Modal.Body>
          <Modal.Title id="modalLinkDiv">
            {/* <Link className="AccountInfoLink" tag={Link} to="/" onClick={handleClose}>Home</Link> */}
            {/* <Link className="AccountInfoLink" tag={Link} to="/addpost" onClick={handleClose2}>add post</Link> */}
            <div className="PinkHoverDiv"><Link
              className="AccountInfoLink"
              tag={Link}
              to="/threads"
              onClick={handleClose2}
            >
              add post
            </Link>
            </div>

            <div className="PinkHoverDiv"><Link
              className="AccountInfoLink"
              tag={Link}
              to="/addthoughts"
              onClick={handleClose2}
            >
              add thoughts
            </Link>
            </div>
            <div className="PinkHoverDiv"><Link
              className="AccountInfoLink"
              tag={Link}
              to="/panic"
              onClick={handleClose2}
            >
              panic button
            </Link>
            </div>
            <div className="PinkHoverDiv"><Link
              className="AccountInfoLink"
              tag={Link}
              to="/emergency"
              onClick={handleClose2}
            >
              emergency
            </Link>
            </div>
          </Modal.Title>
        </Modal.Body>
      </Modal>

      <Modal className="NavModal" show={show}>
        <Modal.Header className="closebarsModalButton2">
          <button onClick={handleClose} className="ModalButtonX">
            X
          </button>
          {/* <div
            onClick={handleClose}
            className="d-flex justify-content-center btn btn-outline-secondary border-0 barsModalButton2"
          >
            X
          </div> */}
        </Modal.Header>
        <Modal.Body>
          <Modal.Title id="modalLinkDiv">
            {/* <Link className="AccountInfoLink" tag={Link} to="/home" onClick={handleClose}>Home</Link> */}
            <div className="PinkHoverDiv">
              <Link className="AccountInfoLink" tag={Link} to="/mood" onClick={handleClose}>change emotion</Link>
            </div>
            <div className="PinkHoverDiv">
              <Link className="AccountInfoLink" tag={Link} to="/panic" onClick={handleClose}>panic button</Link>
            </div>
            <div className="PinkHoverDiv">
              <Link className="AccountInfoLink" tag={Link} to="/emergency" onClick={handleClose}>emergency</Link>
            </div>
            <div className="PinkHoverDiv">
              <Link className="AccountInfoLink" tag={Link} to="/clicker" onClick={handleClose}>marble clicker</Link>
            </div>
            <div className="PinkHoverDiv">
              <Link className="AccountInfoLink" tag={Link} to="/profile" onClick={handleClose}>profile</Link>
            </div>
            <div className="PinkHoverDiv">
              <Link className="AccountInfoLink" tag={Link} to="/volunteer" onClick={handleClose}>volunteer</Link>
            </div>
            <div className="PinkHoverDiv">
              <Link className="AccountInfoLink">seek help: how</Link>
            </div>
            <div className="PinkHoverDiv">
              <Link className="AccountInfoLink" tag={Link} to="/faq" onClick={handleClose}>f.a.q.</Link>
            </div>
            <div className="PinkHoverDiv">
              <Link className="AccountInfoLink">privacy policy</Link>
            </div>
          </Modal.Title>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Nav;
