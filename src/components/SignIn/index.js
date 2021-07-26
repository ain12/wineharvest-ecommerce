import React, { useState, useEffect, useContext } from "react";
import "./styles.scss";
import Button from "./../forms/Button";
import { Redirect } from 'react-router-dom';
import { signInWithGoogle } from "./../../firebase/utils";
import { logOut } from "./../../firebase/utils";
import { UserContext } from "../../providers/UserProvider";


export const SignIn = () => {

    /*const user = useContext(UserContext);
    const [redirect, setRedirect] = useState(null);

    useEffect(() => {
        if (user) {
            setRedirect('/login')
        }
    }, [user])
    if (redirect) {
        <Redirect to={redirect} />
    } */

    const handleSubmit = async e => {
        e.preventDefault();
    }

    return (
        <div className="signIn">
            <div className="wrap">
                <h2>LogIn</h2>
                <div className="formContainer">
                    <form onSubmit={handleSubmit}>
                        <div className="socialLogin">
                            <div className="row">
                                <Button onClick={signInWithGoogle}>
                                    Sign in with Google
                                </Button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}