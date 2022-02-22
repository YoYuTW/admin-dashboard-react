import React from "react";
import "../style/Link.css"

function Link(props) {
  return (
    <a className="link" href="/">
      <svg viewBox="0 0 24 24">
        <path fill="currentColor" d={props.path} />
      </svg>
      {props.name}
    </a>
  )
};

export default Link;