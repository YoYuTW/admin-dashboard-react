import React from "react";
import "../style/Button.css";

function Button(props) {
  const handleClick = props.onClick && ((e) => {console.log(e)});
  return (
    <button onClick={handleClick}>
      {props.name}
    </button>
  )
};

export default Button;