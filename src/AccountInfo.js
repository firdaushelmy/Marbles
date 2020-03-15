import React, { useState } from "react";
import { Link } from "react-router-dom";
import Landing from "./landing";
import "./AccountInfo.css"

function AccountInfo() {

  return (
    <>
      <Landing />
      <div className="container d-flex flex-column align-items-center" id="AccountInfoContainer">
        <h1 className="AccountInfoH1">Account Information Page</h1>
        <Link className="AccountInfoLink">Volunteer</Link>
        <Link className="AccountInfoLink">Seek help: How</Link>
        <Link className="AccountInfoLink">FAQ</Link>
        <Link className="AccountInfoLink">Privacy Policy</Link>
        <Link className="AccountInfoBackLink" tag={Link} to="/">Back</Link>
      </div>
    </>
  )
}

export default AccountInfo;