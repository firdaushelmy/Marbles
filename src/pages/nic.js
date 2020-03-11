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
  columnUser.map(x => {
    console.log(x)
  })
  return (null
    // <Container>
    //   <Row>
    //     {columnUser.map(users => {
    //       const userId = user.id;



    //       return (


    //         <Row
    //           className="border border-dark rounded m-4"
    //         // xs="1"
    //         // sm="2"
    //         // md="4"
    //         >
    //           <Col md={4}>
    //             <div
    //               className="p-3" style={{
    //                 height: "100%",
    //                 display: "inline-flex",
    //                 flexWrap: "wrap",
    //                 alignItems: "center",
    //                 justifyContent: "center"
    //                 // display: "flex",
    //                 // flexDirection: "column",
    //                 // columnCount: "3",
    //               }}
    //             >

    //               {user.username}
    //               <img src={user.profileImage} style={{
    //                 borderRadius: "50%",
    //                 border: "3px solid grey",
    //                 margin: "20px",
    //                 width: "75px",
    //               }}
    //                 alt=""
    //               />

    //             </div>
    //           </Col>
    //           <Col md={8} style={{ flexWrap: "wrap" }}
    //           >
    //             <div className="h-100 p-3">
    //               <UserImages userId={userId} />
    //             </div>
    //           </Col>

    //         </Row>
    //       )
    //     })
    //     }
    //   </Row>
    // </Container>
  )
}

// const ColumnUser = [];
// while (userId.Length) ColumnUser.push(userId.splice(0, 3));

// var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]

// var newArr = [];
// while (arr.length) newArr.push(arr.splice(0, 3));

// console.log(newArr)

export default LandingPage;


