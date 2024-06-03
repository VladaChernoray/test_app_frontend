import React from "react";
import Button from "../Button/Button";
import { UseTg } from "../../hooks/UseTg";
// import "../Header.css";

const Header = () => {
  const { user, onClose } = UseTg();

  console.log("Rendering Header with user:", user);

  return (
    <div className={"header"}>
      <Button onClick={onClose}>Close</Button>
      <span className={'username'}>
        {user ? user.username + " lol" : "Loading..."}
      </span>
    </div>
  );
}

export default Header;
