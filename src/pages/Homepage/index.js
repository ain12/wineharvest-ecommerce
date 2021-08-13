import React from "react";
import "./styles.scss";
import Directory from "../../components/Directory";



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