import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";


export const MainLayout = props => {
    return (
        <div>
            <Header />
            <div className="main-content">
                {props.children}
            </div>
            <Footer />
        </div>
    )
}