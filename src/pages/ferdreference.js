import React from "react";
import { Container, Row, Col } from "reactstrap";
import UserImages from "../components/images/userImages";
// import Image from "react-graceful-image";
// import { } from "react-router-dom";

function Homepage({ users }) {
  return (
    <Container>
      {users.map(user => {
        const userId = user.id;

        return (
          <Row className="border border-dark rounded m-4">
            <Col md={4}>
              <div
                className="p-3" style={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center"
                }}
              >
                {user.username}
                <img src={user.profileImage} style={{
                  borderRadius: "50%",
                  border: "3px solid grey",
                  margin: "20px"
                }}
                />
              </div>
            </Col>
            <Col md={8} style={{ flexWrap: "wrap" }}
            >
              <div className="h-100 p-3">
                <UserImages userId={userId} />
              </div>
            </Col>

          </Row>
        )
      })
      }
    </Container>
  )
}

export default Homepage;
