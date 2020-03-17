import React from "react";
import "./profile.css";
import { Link } from "react-router-dom"

function Profile() {
  return (
    <>
      <div className="container" id="ProfileContainer">
        <div className="ProfilePicDisplay">
          <h6>+profile</h6>
        </div>
        <h2>user.username</h2>
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
        <Link tag={Link} to="/mood" className="ProfileLink">edit profile</Link>
        <Link tag={Link} to="/emergency" className="ProfileLink">emergency contact</Link>
        <Link tag={Link} to="/mood" className="ProfileLink">volunteer</Link>
        <Link tag={Link} to="/mood" className="ProfileLink">how to seek help</Link>
        <Link tag={Link} to="/mood" className="ProfileLink">f.a.q.</Link>
        <Link tag={Link} to="/mood" className="ProfileLink">support group</Link>
      </div>
    </>
  )
}

export default Profile;