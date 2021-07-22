import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export const MainHomePageLayout = props => {

    return (
        <div className="giveFullHeight">
            <Header />
            {props.children}
            <Footer />
        </div>
    )
}