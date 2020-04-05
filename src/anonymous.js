import React from "react";
import "./anonymous.css";
import { Link } from "react-router-dom";
import styled, { ThemeProvider, keyframes, withTheme } from 'styled-components';

function Anonymous() {
  const AnonLink = styled(Link)`
    background-color: ${props => props.theme.anonLinkBg};
    box-shadow: 0 0 1px 0px ${props => props.theme.anonLinkBoxShadow};
    &: hover {
      color: ${props => props.theme.anonLinkHoverCol};
    };   
    &: active {
      color: ${props => props.theme.anonLinkHoverCol};
    };
  `

  AnonLink.defaultProps = {
    theme: {
      anonLinkBg: "#FBA589",
      anonLinkBoxShadow: "coral",
      anonLinkHoverCol: "white"
    }
  }

  const AnonLink2 = styled(Link)`
    background-color: ${props => props.theme.anonLinkBg2};
    box-shadow: 0 0 1px 0px ${props => props.theme.anonLinkBoxShadow2};
    &: hover {
      color: ${props => props.theme.anonLinkHoverCol2};
    };   
    &: active {
      color: ${props => props.theme.anonLinkHoverCol2};
    };
  `

  AnonLink2.defaultProps = {
    theme: {
      anonLinkBg2: "#FBD6C8",
      anonLinkBoxShadow2: "coral",
      anonLinkHoverCol2: "coral"
    }
  }

  return (
    <div className="container" id="anonContainer">
      <AnonLink tag={Link} to="/login" className="createAccount">create an account</AnonLink>
      <h6>create an account to track your contribution and past posts from other devices</h6>
      <h6>anonymous accounts are deactivated after 15 days of inactivity.</h6>
      <AnonLink2 tag={Link} to="/login" className="anonymousLink">log in</AnonLink2>
      <AnonLink2 tag={Link} to="/mood" className="anonymousLink">volunteer</AnonLink2>
      <AnonLink2 tag={Link} to="/mood" className="anonymousLink">how to seek help</AnonLink2>
      <AnonLink2 tag={Link} to="/mood" className="anonymousLink">f.a.q.</AnonLink2>
      <AnonLink2 tag={Link} to="/mood" className="anonymousLink">privacy policy</AnonLink2>
      <AnonLink2 tag={Link} to="/mood" className="anonymousLink">support group</AnonLink2>
    </div>
  )
}

export default Anonymous;