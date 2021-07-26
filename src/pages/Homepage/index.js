import React, { useState, useEffect, useContext } from "react";
import "./styles.scss";
import Directory from "../../components/Directory";
import { Redirect } from 'react-router-dom';
import { UserContext } from "../../providers/UserProvider";


const Homepage = props => {

    /*const user = useContext(UserContext);
    const [redirect, setredirect] = useState(null);

    useEffect(() => {
        if (!user) {
            setredirect("/");
        }
    }, [user]);
    if (redirect) {
        <Redirect to={redirect} />;
    } */


    return (
        <section className="homepage">
            <Directory />
        </section>
    )
}

export default Homepage;