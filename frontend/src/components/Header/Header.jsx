import React from "react";
import Button from "../Button/Button";
import { UseTg } from "../../hooks/UseTg";

const Header = () => {
  const { user, onClose } = UseTg();

  console.log('Header user:', user);

  return (
    <div className={"header"}>
      <Button onClick={onClose}>Close</Button>
      <span className={'username'}>
        {user ? user.username + " lol" : "here should be username"}
      </span>
      <span className={"id"}>
        {user ? user.id + " kek" : "here should be id"}
        </span>
    </div>
  );
}

export default Header;
