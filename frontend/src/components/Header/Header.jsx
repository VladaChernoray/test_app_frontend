import React from "react";
import Button from "../Button/Button";
import { UseTg } from "../../hooks/UseTg";
import "../Header/Header.css"
import "../Button/Button.css"

const Header = () => {
  const { user, onClose } = UseTg();

  console.log('Header user:', user);

  return (
    <div className={"header"}>
      <Button className={"button"} onClick={onClose}>Close</Button>
      <span className={'username'}>
        {user ? user.username : "username"}
      </span>
    </div>
  );
}

export default Header;
