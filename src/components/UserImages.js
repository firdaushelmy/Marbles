import React, { useState, useEffect } from "react";
import { Card, CardImg, CardGroup } from "reactstrap";
import axios from "axios";
import LoadingIndicator from '../components/LoadingIndicator';
import Image from "react-graceful-image";
import "./UserImages.css"
import { Modal, Button } from "react-bootstrap"
import Comments from "./comments"

function UserImages({ threadId, userID }) {
  const [userImages, setUserImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const handleCloseModal = () => setShowModal(false);
  const handleShowModal = () => setShowModal(true);
  // const images = document.querySelectorAll('.UserImages');

  useEffect(() => {
    axios
      .get(`https://marbles-backend.herokuapp.com/api/v1/threads/${threadId}`)
      .then(result => {
        console.log(result);
        setUserImages(result.data);
        setIsLoading(false);
      });
  }, [threadId]);

  if (isLoading) {
    return (
      <LoadingIndicator size="150px" />
    )
  }

  else {
    return (
      <>
        <div onClick={handleShowModal}>
          <Image height="100%" width="100%" src={userImages[0]} className="UserImages" />
        </div>
        <Modal show={showModal}>
          <Modal.Header>
            <Button onClick={handleCloseModal}>
              Return To Home
          </Button>
          </Modal.Header>
          <Modal.Body>
            <Modal.Title>
              <Image src={userImages[0]} className="EnlargedImage"></Image>
            </Modal.Title>
          </Modal.Body>
          <Modal.Footer>
            
            <div>
              <Comments threadId={threadId} userID={userID}/>
            </div>

          </Modal.Footer>
        </Modal>
      </>
    )
  }
}

export default UserImages;