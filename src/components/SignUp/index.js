import React, { useRef, useState } from "react";
import "./styles.scss";
import Button from "./../forms/Button";
import { signInWithGoogle } from "./../../firebase/utils";
import { Alert } from 'react-bootstrap';
import { auth, handleUserProfile } from "../../firebase/utils";
import 'bootstrap/dist/css/bootstrap.min.css';
import googleLogo from "../../assets/g-logo.png";

export const SignUp = () => {
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const name = useRef();
    const email = useRef();
    const password = useRef();
    const passwordConfirmRef = useRef();

    const handleSubmit = async e => {
        e.preventDefault();
        const displayName = name.current.value;

        if (password.current.value !== passwordConfirmRef.current.value) {
            return setError("Passwords do not match");
        }

        try {
            setError("")
            setLoading(true)
            const { user } = await auth.createUserWithEmailAndPassword(email.current.value, password.current.value)
            const userRef = await handleUserProfile(user, { displayName })
            console.log(userRef)
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
                            <label><b>Name</b></label>
                            <input type="text" ref={name} placeholder="Enter name" name="name" required></input>
                            <label><b>Email</b></label>
                            <input type="text" ref={email} placeholder="Enter Email" name="email" required></input>
                            <label><b>Password</b></label>
                            <input type="password" ref={password} placeholder="Enter Password" name="password" required></input>
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