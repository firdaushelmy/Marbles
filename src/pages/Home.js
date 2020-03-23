import React, { useState } from "react";
import { Container, Row, Col } from "reactstrap";
import UserImages from '../components/UserImages';
import LoadingIndicator from '../components/LoadingIndicator';
import "./Home.css"
import { Form, Button, Modal } from "react-bootstrap"
import { Link } from "react-router-dom"
import Image from "react-graceful-image"
import ImgSrc from "react-graceful-image";
import Comments from "../components/comments"


function Home({ threads, userID, isLoading, threadId }) {
  const [userImages, setUserImages] = useState([]);
  // const [isLoading, setIsLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const handleCloseModal = () => setShowModal(false);
  const handleShowModal = () => setShowModal(true);
  if (isLoading) {
    return (
      <LoadingIndicator size="250px" />
    );
  }
  //   let columnUser = [];
  //   let userCopy = [...threads]
  //   while (userCopy.length) columnUser.push(userCopy.splice(0, 3));
  //   return (
  //     <Container className="UserContainer">
  //       {
  //         columnUser.map(x => {
  //           return (
  //             <Row>
  //               {
  //                 x.map(x => {
  //                   const threadId = x.id;
  //                   return (
  //                     <Col xs={12} md={4}>
  //                       <div className="IndividCol">
  //                         <div className="ImageDiv">
  //                           <UserImages className="UserImages" threadId={threadId} userID={userID} />
  //                         </div>
  //                       </div>
  //                     </Col>
  //                   )
  //                 })
  //               }
  //             </Row>
  //           )
  //         }
  //         )
  //       }
  //     </Container>
  //   )
  // }

  return (threads.map(thread => {
    return (
      <>
        <Container className="UserContainer">
          <Col xs={12} md={4}>
            <div className="IndividCol">
              <div onClick={handleShowModal} className="ImageDiv">
                <Image className="UserImages" src={`https://marblesbackend.s3-ap-southeast-1.amazonaws.com/${thread.template}`} />
              </div>
              <h2 class="divtext"><span>{thread.content}</span></h2>
            </div>
          </Col>
        </Container>

        <Modal show={showModal} className="ImageModal">
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
              <Comments threadId={threadId} userID={userID} />
            </div>

          </Modal.Footer>
        </Modal>
      </>
    )
  }))
}

export default Home;


