import React, { useState, useRef } from "react";
import "./styles.scss";
import Button from "./../forms/Button";
import { signInWithGoogle } from "./../../firebase/utils";
import { logInWithEmail } from "../../firebase/utils";
import { Alert } from 'react-bootstrap';
import { useHistory } from "react-router";
import googleLogo from "../../assets/g-logo.png";


export const SignIn = () => {
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const emailRef = useRef();
    const passwordRef = useRef();
    const history = useHistory();

    const handleSubmit = async e => {
        e.preventDefault();
        try {
            setError("")
            setLoading(true)
            await logInWithEmail(emailRef.current.value, passwordRef.current.value)
            history.push("/")
        } catch {
            setError("Failed to log in")
        }

        setLoading(false)
    }

    return (
        <div className="signIn">
            <div className="wrap">
                <h2>LogIn</h2>
                {error && <Alert variant="danger">{error}</Alert>}
                <div className="formContainer">
                    <form onSubmit={handleSubmit}>
                        <div className="socialLogin">
                            <label><b>Email</b></label>
                            <input type="text" ref={emailRef} placeholder="Enter Email" name="email" required></input>
                            <label><b>Password</b></label>
                            <input type="password" ref={passwordRef} placeholder="Enter Password" name="password" required></input>
                            <Button disabled={loading}>
                                Sign In
                            </Button>
                            <br />
                            <Button onClick={signInWithGoogle}>
                                <img src={googleLogo} alt="Google logo" />
                                Sign in with Google
                            </Button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}