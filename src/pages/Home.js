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
import ThreadLikes from "../components/threadlikes.js";
import styled, { ThemeProvider, keyframes, withTheme } from 'styled-components';

function Home({ threads, userID, isLoading, threadId }) {
  const [userImages, setUserImages] = useState([]);
  // const [isLoading, setIsLoading] = useState(true);
  const [showModal, setShowModal] = useState(null);
  const handleCloseModal = () => setShowModal(false);
  const handleShowModal = () => setShowModal(true);

  const ReturnToHomeButton = styled(Button)`
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

  ReturnToHomeButton.defaultProps = {
    theme: {
      encBtnBg: "#FBD6C8",
      encBtnCol: "black",
      encBtnBorder: "#FBA589",
      encBtnBgHover: "#FBA589",
      encBtnColHover: "black",
      encBtnBorderHover: "#FBA589"
    }
  };

  const HomeModalHeader = styled(Modal.Header)`
  background-color: ${props => props.theme.homeModalBg};
  `

  HomeModalHeader.defaultProps = {
    theme: {
      homeModalBg: "rgb(250, 228, 220)"
    }
  }

  const HomeModalBody = styled(Modal.Body)`
  background-color: ${props => props.theme.homeModalBg};
  `

  HomeModalBody.defaultProps = {
    theme: {
      homeModalBg: "rgb(250, 228, 220)"
    }
  }

  const HomeModalFooter = styled(Modal.Body)`
  background-color: ${props => props.theme.homeModalBg};
  `

  HomeModalFooter.defaultProps = {
    theme: {
      homeModalBg: "rgb(250, 228, 220)"
    }
  }

  const ImageDivBorder = styled.div`
  background-color: ${props => props.theme.imageDivBorderBg};
  `;

  ImageDivBorder.defaultProps = {
    theme: {
      imageDivBorderBg: "#FBA589"
    }
  }


  if (isLoading) {
    return (
      <LoadingIndicator size="250px" />
    );
  }

  return (
    threads.map(thread => {
      return (
        <>
          <Container className="userContainer">
            {/* took out the stuff in col, and restored it without bells and whistles. added styling for three rows in the home.css */}
            <Col className="userContainerCol">
              <div classname="container" id="individCol">
                <ImageDivBorder className="imageDivBorder">
                  <div className="imageDiv">
                    <Image id={thread.id} className="userImages" src={`https://marblesbackend.s3-ap-southeast-1.amazonaws.com/${thread.template}`} />
                  </div>
                </ImageDivBorder>
                <div className="threadDiv" onClick={() => setShowModal(thread.id)}>
                  <h6 className="threadContent"><span>{thread.content}</span>
                    <div>
                      <ThreadLikes threadID={thread.id} />
                    </div>
                  </h6>
                </div>
              </div>
            </Col>
          </Container>


          <Modal show={showModal == thread.id} className="imageModal">
            <HomeModalHeader>
              <ReturnToHomeButton className="returnToHome" onClick={handleCloseModal}>
                Return To Home
          </ReturnToHomeButton>
            </HomeModalHeader>
            <HomeModalBody>
              <Image id={thread[thread.id]} src={`https://marblesbackend.s3-ap-southeast-1.amazonaws.com/${thread.template}`} className="enlargedImage"></Image>
            </HomeModalBody>
            <HomeModalFooter>

              <div className="commentWrapperHome">
                <Comments threads={threads} threadId={thread.id} userID={userID} />
              </div>

            </HomeModalFooter>
          </Modal>
        </>
      )
    })
  )
}

export default Home;