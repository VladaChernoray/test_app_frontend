import React from "react";
import Button from "../Button/Button";
import { UseTg } from "../../hooks/UseTg";

const Header = () => {

const {user, onClose} = UseTg();

    return(
        <div className={"header"}>
            <Button onClick={onClose}>Close</Button>
            <span className={user?.username}>{user}</span>
        </div>
    )
}

export default Header;