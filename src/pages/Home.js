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
  const [showModal, setShowModal] = useState(null);
  const handleCloseModal = () => setShowModal(false);
  const handleShowModal = () => setShowModal(true);

  console.log(threads[0])

  const intakeID = () => {
    let indi = document.getElementsByClassName("UserImages")

  }


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

  return (

    threads.map(thread => {
      return (
        <>
          <Container className="UserContainer">
            {/* took out the stuff in col, and restored it without bells and whistles. added styling for three rows in the home.css */}
            <Col>
              <div classname="container" id="IndividCol">
                <div className="ImageDiv" onClick={() => setShowModal(thread.id)}>
                  <Image id={thread.id} className="UserImages" src={`https://marblesbackend.s3-ap-southeast-1.amazonaws.com/${thread.template}`} />
                </div>
                <h2 className="ThreadContent"><span>{thread.content}</span></h2>
              </div>
            </Col>
          </Container>

          <Modal show={showModal == thread.id} className="ImageModal">
            <Modal.Header>
              <Button onClick={handleCloseModal}>
                Return To Home
          </Button>
            </Modal.Header>
            <Modal.Body>
              <Modal.Title>
                <Image id={thread[thread.id]} src={`https://marblesbackend.s3-ap-southeast-1.amazonaws.com/${thread.template}`} className="EnlargedImage"></Image>
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
    })


  )
}

export default Home;


