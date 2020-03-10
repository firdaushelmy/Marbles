import React, { useState } from "react";
import { Button, Modal, NavLink } from "react-bootstrap"
import { Link } from "react-router-dom"
import "./navbar.css"
function Navbar() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    return (
        <>
            <Button onClick={handleShow} className="barsModalButton">
                <i class="fa fa-bars"></i><span></span>
            </Button>
            <Modal show={show}>
                <Modal.Header className="closebarsModalButton2">
                    <Button onClick={handleClose} className="barsModalButton2">
                        X
                    </Button>
                </Modal.Header>
                <Modal.Body>
                    <Modal.Title id="modalLinkDiv">
                        <Link id="Link" tag={Link} to="/" onClick={handleClose}>Home</Link>
                        <Link id="Link" tag={Link} to="/mood" onClick={handleClose}>Change Emotion</Link>
                        <Link id="Link" tag={Link} to="/panic" onClick={handleClose}> Panic button</Link>
                    </Modal.Title>
                </Modal.Body>
            </Modal>
        </>
    )


}

export default Navbar;