import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./navbar.css";
import { Navbar } from "react-bootstrap";

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

    return (
        <>
            <Navbar className="Navbar">
                <Navbar.Brand>
                    <div onClick={handleShow2} className="AddButton">+</div>
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
                            <i className="fa fa-bars"></i><span></span>
                        </div>
                    </Navbar.Text>
                </Navbar.Collapse>
            </Navbar>

            <Modal show={show2}>
                <Modal.Header className="closebarsModalButton2">
                    <Button onClick={handleClose2} className="barsModalButton2">
                        X
                    </Button>
                </Modal.Header>
                <Modal.Body>
                    <Modal.Title id="modalLinkDiv">
                        <Link className="AccountInfoLink" tag={Link} to="/mood" onClick={handleClose}>change emotion</Link>
                    </Modal.Title>
                </Modal.Body>
            </Modal>

            <Modal show={show}>
                <Modal.Header className="closebarsModalButton2">
                    <Button onClick={handleClose} className="barsModalButton2">
                        X
                    </Button>
                </Modal.Header>
                <Modal.Body>
                    <Modal.Title id="modalLinkDiv">
                        {/* <Link className="AccountInfoLink" tag={Link} to="/home" onClick={handleClose}>Home</Link> */}
                        <Link className="AccountInfoLink" tag={Link} to="/mood" onClick={handleClose}>change emotion</Link>
                        <Link className="AccountInfoLink" tag={Link} to="/panic" onClick={handleClose}>panic button</Link>
                        <Link className="AccountInfoLink" tag={Link} to="/emergency" onClick={handleClose}>emergency</Link>
                <Link
              className="AccountInfoLink"
              tag={Link}
              to="/clicker"
              onClick={handleClose}
            >
              Marble Clicker
            </Link>
                        <Link className="AccountInfoLink" tag={Link} to="/profile" onClick={handleClose}>profile</Link>
                        <Link className="AccountInfoLink" tag={Link} to="/volunteer" onClick={handleClose}>volunteer</Link>
                        <Link className="AccountInfoLink">seek help: how</Link>
                        <Link className="AccountInfoLink" tag={Link} to="/faq" onClick={handleClose}>f.a.q.</Link>
                        <Link className="AccountInfoLink">privacy policy</Link>
                        {/* {!loggedIn ? (<Link className="AccountInfoLink" tag={Link} to="/login" onClick={handleClose}>Log In</Link>) : (<Link className="AccountInfoLink" onClick={() => setLoggedIn(loggedOut, handleClose)}>Log Out</Link>)} */}
                    </Modal.Title>
                </Modal.Body>
            </Modal>
        </>
  );
}

export default Nav;
