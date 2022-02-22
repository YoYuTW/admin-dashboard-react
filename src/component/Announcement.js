import React from "react";
import "../style/Announcement.css"
function Announcement(props) {
  return (
    <div className="announcement">
      <h4>{props.title}</h4>
      <p>{props.content}</p>
    </div>
  )
};

export default Announcement;