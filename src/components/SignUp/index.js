import React, { useRef, useState } from "react";
import "./styles.scss";
import Button from "./../forms/Button";
import { signInWithGoogle } from "./../../firebase/utils";
import { Alert } from 'react-bootstrap';
import { createAccount } from "../../firebase/utils";
import 'bootstrap/dist/css/bootstrap.min.css';
import googleLogo from "../../assets/g-logo.png";



export const SignUp = () => {
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const emailRef = useRef();
    const passwordRef = useRef();
    const passwordConfirmRef = useRef();

    const handleSubmit = async e => {
        e.preventDefault();

        if (passwordRef.current.value !== passwordConfirmRef.current.value) {
            return setError("Passwords do not match");
        }

        try {
            setError("")
            setLoading(true)
            await createAccount(emailRef.current.value, passwordRef.current.value)
        } catch {
            setError("Failed to create an account")
        }

        setLoading(false)
    }

    return (
        <div className="signUp">
            <div className="wrap">
                <h2>Sign Up</h2>
                {error && <Alert variant="danger">{error}</Alert>}
                <div className="formContainer">
                    <form onSubmit={handleSubmit}>
                        <div className="socialSignup">
                            <label><b>Email</b></label>
                            <input type="text" ref={emailRef} placeholder="Enter Email" name="email" required></input>
                            <label><b>Password</b></label>
                            <input type="password" ref={passwordRef} placeholder="Enter Password" name="password" required></input>
                            <label><b>Repeat Password</b></label>
                            <input type="password" ref={passwordConfirmRef} placeholder="Repeat Password" name="passwordRepeat" required></input>
                            <Button disabled={loading}>
                                <p>Sign Up</p>
                            </Button>
                            <br />
                            <Button onClick={signInWithGoogle}>
                                <img src={googleLogo} alt="Google logo" />
                                Sign up with Google
                            </Button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}