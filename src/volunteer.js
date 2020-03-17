import React from "react";
import "./volunteer.css";
import { Link } from "react-router-dom"

function Volunteer() {
  return (
    <div className="container" id="VolunteerDiv">
      <div className="OrgLogoImage"></div>
      <h6 className="BrandName">BefriendersKL</h6>
      <h6>helpline volunteer</h6>
      <h6>03-7957-1306</h6>
      <h6>admin@befrienders.org.my</h6>
      <div className="VolunteerSocialMediaDiv">
        <Link>
          <h1 className="FacebookIcon"><i className="fab fa-facebook"></i><span></span></h1>
        </Link>
        <Link>
          <h1 className="TwitterIcon"><i className="fab fa-twitter"></i><span></span></h1>
        </Link>
        <Link>
          <h1 className="InstagramIcon"><i className="fab fa-instagram"></i><span></span></h1>
        </Link>
        <h6 className="SocialName">BefriendersKL</h6>
      </div>
      <button className="VolunteerButton">
        <Link className="VolunteerLink">volunteer</Link>
      </button>
      <h6 className="VolunteerTitle">work needed</h6>
      <h6>Lorem ipsum dolor sit amet</h6>
      <h6 className="VolunteerTitle">when needed</h6>
      <h6>Lorem ipsum dolor sit amet</h6>
      <h6 className="VolunteerTitle">what will be provided (training)</h6>
      <h6>Lorem ipsum dolor sit amet</h6>
    </div>
  )
}

export default Volunteer;