import React, { useState } from "react";
import Button from "./Button";
import "../style/Nav.css";

function Nav() {
  const [username, setUsername] = useState("YoYu Chen");
  const [userAccount, setUserAccount] = useState("@yoyuTW");

  const buttons = ["New", "Upload", "Share"];

  return (
    <nav>
      <div className="search">
        <svg viewBox="0 0 24 24">
          <path fill="currentColor" d="M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z" />
        </svg>
        <input type="text" name="search" />
      </div>
      <div className="personal">
        <svg viewBox="0 0 24 24">
          <path fill="currentColor" d="M10 21H14C14 22.1 13.1 23 12 23S10 22.1 10 21M21 19V20H3V19L5 17V11C5 7.9 7 5.2 10 4.3V4C10 2.9 10.9 2 12 2S14 2.9 14 4V4.3C17 5.2 19 7.9 19 11V17L21 19M17 11C17 8.2 14.8 6 12 6S7 8.2 7 11V18H17V11Z" />
        </svg>
        <div className="profile-pic" />
        <div>{username}</div>
      </div>
      <div className="greeting">
        <div className="profile-pic" />
        <p>Hi there, <br/>
          <span>{`${username} (${userAccount})`}</span>
        </p>
      </div>
      <div>
        {buttons.map(button => <Button name={button} key={button}/>)}
      </div>
    </nav>
  )
};

export default Nav;