import React, { useState, useEffect } from "react";
import { Card, CardImg, CardGroup } from "reactstrap";
import axios from "axios";
import LoadingIndicator from '../components/LoadingIndicator';


function UserImages({ userId }) {
  const [userImages, setUserImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`https://insta.nextacademy.com/api/v1/images?userId=${userId}`)
      .then(result => {
        setUserImages(result.data);
        setIsLoading(false);
      });
  }, [userId]);

  if (isLoading) {
    return (
      <LoadingIndicator size="150px" />
    )
  }

  else {
    return (
      <CardGroup>
        <Card>
          <CardImg
            top width="100%"
            src={userImages[0]}
            alt="Card image cap"
            borderColor="red"
            borderRadius="0"
            color="red"
            textAlign="center"

          />
        </Card>
      </CardGroup>
    )
  }
}

export default UserImages;