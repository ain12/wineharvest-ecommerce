import React from "react";
import "./styles.scss";
import Logo from "./../../assets/wineharvestlogo.PNG";

const Header = props => {
    return (
        <header className="header">
            <div className="wrap">
                <div className="logo">
                    <img src={Logo} alt="logo company" />
                </div>
            </div>
        </header>
    )
}

export default Header;
