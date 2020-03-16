import React from "react";
import "./profile.css"

function Profile() {
  return (
    <>
      <div className="container" id="ProfileContainer">
        <div className="ProfilePicDisplay">
          <h6>+profile</h6>
        </div>
        <h1>user.username</h1>
        <div className="EncouragementStarred">
          <div className="Encouragements">
            <h6>{Math.floor(Math.random() * 1000)}</h6>
            <h6>encs</h6>
          </div>
          <div className="Encouragements">
            <h6>{Math.floor(Math.random() * 1000)}</h6>
            <h6>stars</h6>
          </div>
        </div>
      </div>
    </>
  )
}

export default Profile;