import React from "react";
import "../style/Card.css";

function Card(props) {
  return (
    <div className="card">
      {props.children}
    </div>
  )
};

export default Card;