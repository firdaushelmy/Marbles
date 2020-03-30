import React from "react";
import "./anonymous.css";
import { Link } from "react-router-dom"

function Anonymous() {
  return (
    <div className="container" id="anonContainer">
      <Link tag={Link} to="/login" className="createAccount">create an account</Link>
      <h6>create an account to track your contribution and past posts from other devices</h6>
      <h6>anonymous accounts are deactivated after 15 days of inactivity.</h6>
      <Link tag={Link} to="/login" className="anonymousLink">log in</Link>
      <Link tag={Link} to="/mood" className="anonymousLink">volunteer</Link>
      <Link tag={Link} to="/mood" className="anonymousLink">how to seek help</Link>
      <Link tag={Link} to="/mood" className="anonymousLink">f.a.q.</Link>
      <Link tag={Link} to="/mood" className="anonymousLink">privacy policy</Link>
      <Link tag={Link} to="/mood" className="anonymousLink">support group</Link>
    </div>
  )
}

export default Anonymous;