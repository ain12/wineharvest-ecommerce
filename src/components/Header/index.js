import React, { useState, useContext } from "react";
import { UserContext } from "./../../providers/UserProvider";
import { HashLink as Link } from 'react-router-hash-link';
import "./styles.scss";
import styled from 'styled-components'
import { logOut } from "./../../firebase/utils";
import { HamburgerBtn } from "../forms/Hamburger";
import Logo from "./../../assets/wineharvestlogo.PNG";

const BtnRegisterContainer = styled.div`
    margin-right: 2.5rem;
        li, a {
            color: #000;
            text-decoration: none;
            text-transform: uppercase;
            font-size: 1.5rem;
            
             &:not(:last-child) {
                margin-right: 1.5rem;
            }
        }
        @media (max-width: 767px){
            display: ${props => props.clicked ? "flex" : "none"};
            position: fixed; 
            z-index: 1; 
            padding-top: 100px; 
            left: 0;
            top: 0;
            width: 100%; 
            height: 100%; 
            overflow: auto;
            background-color: rgb(0,0,0); 
            background-color: rgba(0,0,0,0.4); 
            flex-direction: column;
            align-items: center;

            ul {
                background-color: #fefefe;
                margin: 5% auto; 
                padding: 20px;
                border: 1px solid #888;
                width: 80%;
                height: 200px;
            }

        li, a {
            color: #000;
            font-size: 28px;
            font-weight: bold;
            margin-top: 1.5rem;
            margin-right: 0;

            &:not(:last-child) {
                margin-bottom: 0;
    }
  }
}
`

const Header = () => {
    const [hamburgerOpen, setHamburgerOpen] = useState(false);
    const user = useContext(UserContext);

    const toggleHamburger = () => {
        setHamburgerOpen(!hamburgerOpen)
    }

    return (
        <header className="header">
            <div className="wrap">
                <div className="logo">
                    <Link to="/">
                        <img src={Logo} alt="logo company" />
                    </Link>
                </div>
            </div>

            <BtnRegisterContainer clicked={hamburgerOpen}>
                <ul>
                    {user === null && <li><Link to="/registration">Register</Link> </li>}
                    {user === null ?
                        <li><Link to="/login">login</Link></li> : <li><Link to="/" onClick={logOut}>logout</Link></li>
                    }
                </ul>
            </BtnRegisterContainer>

            <div className="hamburgerBtn" onClick={toggleHamburger}>
                <HamburgerBtn />
            </div>
        </header>
    )
}

export default Header;
