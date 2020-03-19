import React, { useState, useEffect } from "react";
import { Card, CardImg, CardGroup } from "reactstrap";
import axios from "axios";
import LoadingIndicator from '../components/LoadingIndicator';
import Image from "react-graceful-image";
import "./UserImages.css"
import { Modal, Button } from "react-bootstrap"
import comments from "./comments"

function UserImages({ userId }) {
  const [userImages, setUserImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const handleCloseModal = () => setShowModal(false);
  const handleShowModal = () => setShowModal(true);
  // const images = document.querySelectorAll('.UserImages');

  useEffect(() => {
    axios
      .get(`https://marbles-backend.herokuapp.com/api/v1/threads/${threadID}`)
      .then(result => {
        setUserImages(result.data);
        setIsLoading(false);
      });
  }, [threadID]);

  if (isLoading) {
    return (
      <LoadingIndicator size="150px" />
    )
  }

  else {
    return (
      <>
        <div onClick={handleShowModal}>
          <Image height="100%" width="100%" src={userImages} className="UserImages" />
        </div>
        <Modal show={showModal}>
          <Modal.Header>
            <Button onClick={handleCloseModal}>
              Return To Home
          </Button>
          </Modal.Header>
          <Modal.Body>
            <Modal.Title>
              <Image src={userImages} className="EnlargedImage"></Image>
            </Modal.Title>
          </Modal.Body>
          <Modal.Footer>
            
            <div>
              <comments userId={userId} />
            </div>

          </Modal.Footer>
        </Modal>
      </>
    )
  }
}

export default UserImages;