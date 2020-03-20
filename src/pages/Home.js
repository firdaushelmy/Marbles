import React, { useState } from "react";
import { Container, Row, Col } from "reactstrap";
import UserImages from '../components/UserImages';
import LoadingIndicator from '../components/LoadingIndicator';
import "./Home.css"
import { Form, Button, Modal } from "react-bootstrap"
import { Link } from "react-router-dom"
import Image from "react-graceful-image"
import ImgSrc from "react-graceful-image"

function Home({ threads, userID, isLoading }) {
  if (isLoading) {
    return (
      <LoadingIndicator size="250px" />
    );
  }
  // let columnUser = [];
  // let userCopy = [...threads]
  // while (userCopy.length) columnUser.push(userCopy.splice(0, 3));


  return (threads.map(thread => {
    return (
      <Container className="UserContainer">
        <div class="wrapper" >
          <img class="divimage" src={`https://marblesbackend.s3-ap-southeast-1.amazonaws.com/${thread.template}`} />
          <h2 class="divtext"><span>{thread.content}</span></h2>
        </div>
      </Container>
    )
  })
  )
}





// <Container className="UserContainer">
//   {
//     columnUser.map(x => {
//       return (
//         <Row>
//           {
//             x.map(x => {
//               const threadId = x.id;
//               return (
//                 <Col xs={12} md={4}>
//                   <div className="IndividCol">
//                     <div className="ImageDiv">
//                       <UserImages className="UserImages" threadId={threadId} userID={userID} />
//                     </div>
//                   </div>
{/* <div className="HalfDiv">
                        <div className="CommentIconDiv">
                          <i id="CommentIcon" className="far fa-comments"></i><span></span>
                        </div>
                        <Container className="CommentInputContainer">
                          <Form>
                            <Form.Group controlId="exampleForm.ControlTextarea1">
                              <Form.Control as="textarea" rows="1" />
                            </Form.Group>
                            <Button className="CommentPostButton" type="submit">post</Button>
                          </Form>
                        </Container>
                      </div> */}
{/* </Col>
                  )
                })
              }
            </Row>
          )
        }
        )
      }
    </Container> */}


export default Home;


