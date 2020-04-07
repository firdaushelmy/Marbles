import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link, useHistory, useLocation } from "react-router-dom";

// Functional link component which delays page navigation
const DelayLink = props => {
  const { delay, onDelayStart, onDelayEnd, replace, to, ...rest } = props;
  let timeout = null;
  let history = useHistory();
  let location = useLocation();

  useEffect(() => {
    return () => {
      if (timeout) {
        clearTimeout(timeout);
      }
    };
  }, [timeout]);

  const handleClick = e => {
    // if trying to navigate to current page stop everything
    if (location?.pathname === "/home") return;

    onDelayStart(e);
    if (e.defaultPrevented) {
      return;
    }

    e.preventDefault();

    timeout = setTimeout(() => {
      if (replace) {
        history.replace("/home");
      } else {
        history.push("/home");
      }
      onDelayEnd(e);
    }, delay);
  };

  // return <Link {...rest} to={to} onClick={handleClick} />;
  return <a {...rest} href="/home" onClick={handleClick} />;
};

DelayLink.propTypes = {
  // Milliseconds to wait before registering the click.
  delay: PropTypes.number,
  // Called after the link is clicked and before the delay timer starts.
  onDelayStart: PropTypes.func,
  // Called after the delay timer ends.
  onDelayEnd: PropTypes.func,
  // Replace history or not
  replace: PropTypes.bool,
  // Link to go to
  to: PropTypes.string
};

DelayLink.defaultProps = {
  replace: false,
  delay: 0,
  onDelayStart: () => { },
  onDelayEnd: () => { }
};

export default DelayLink;