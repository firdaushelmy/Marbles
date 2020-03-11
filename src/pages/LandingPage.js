import React from "react";
import { Container, Row, Col } from "reactstrap";
import UserImages from '../components/UserImages';
import LoadingIndicator from '../components/LoadingIndicator';

const LandingPage = ({ users, isLoading }) => {
  if (isLoading) {
    return (
      <LoadingIndicator size="250px" />
    );
  }
  let columnUser = [];
  while (users.length) columnUser.push(users.splice(0, 3));
  // console.log(columnUser)
  return (
    <Container style=
      {{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "flexStart",
        columnCount: "3",
      }}
    >{
        columnUser.map(x => {
          return (
            <Row>
              {
                x.map(x => {
                  const userId = x.id;
                  return (
                    <Col>
                      <UserImages userId={userId} />
                    </Col>
                  )
                })
              }
            </Row>
          )
        }
        )
      }
    </Container>
  )
}

// const ColumnUser = [];
// while (userId.Length) ColumnUser.push(userId.splice(0, 3));

// var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]

// var newArr = [];
// while (arr.length) newArr.push(arr.splice(0, 3));

// console.log(newArr)

export default LandingPage;


