import React, { useState, useEffect, useContext } from "react";
import "./styles.scss";
import { logOut } from "./../../firebase/utils";
import { UserContext } from "./../../providers/UserProvider";
import { HashLink as Link } from 'react-router-hash-link';
import Logo from "./../../assets/wineharvestlogo.PNG";

const Header = () => {
    const user = useContext(UserContext);

    return (
        <header className="header">
            <div className="wrap">
                <div className="logo">
                    <Link to="/">
                        <img src={Logo} alt="logo company" />
                    </Link>
                </div>
            </div>
            <div className="btnRegisterContainer">
                {user === null && <Link to="/registration">Register</Link>}
                {user === null ?
                    <Link to="/login">login</Link> : <Link to="/" onClick={logOut}>logout</Link>
                }
                {console.log(user)}
            </div>
        </header>
    )
}

export default Header;
