import React from "react";
import Button from "../Button/Button";
import { UseTg } from "../../hooks/UseTg";
//import "../Header.css";

const Header = () => {

const {user, onClose} = UseTg();

    return(
        <div className={"header"}>
            <Button onClick={onClose}>Close</Button>
            <span className={'username'}>{user?.username + "lol"}</span>
        </div>
    )
}

export default Header;