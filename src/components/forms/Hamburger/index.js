import React from "react"
import "./styles.scss"

export const HamburgerBtn = () => {
    return (
        <React.Fragment>
            <div className="hamburger">
                <div className="burger burger1" />
                <div className="burger burger2" />
                <div className="burger burger3" />
            </div>
        </React.Fragment>
    )
}