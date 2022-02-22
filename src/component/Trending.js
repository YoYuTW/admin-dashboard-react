import React from "react";
import "../style/Trending.css"

function Trending(props) {
  return (
    <div className="trending">
      <div className="profile-pic"></div>
      <div>
        <div>{props.user}</div>
        <div className="org">{props.org}</div>
      </div>
    </div>
  )
};

export default Trending;