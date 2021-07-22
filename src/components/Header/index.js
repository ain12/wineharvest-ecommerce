import React from "react";
import "./styles.scss";
import { HashLink as Link } from 'react-router-hash-link';
import Logo from "./../../assets/wineharvestlogo.PNG";

const Header = () => {
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
                <Link to="/registration">Register</Link>
            </div>
        </header>
    )
}

export default Header;
