import React from "react";
import Vineyard from "./../../assets/pexels-david-bartus-442116.jpg";
import "./styles.scss";

const Directory = props => {
    return (
        <div className="directory">
            <div className="wrap">
                <div className="vineyardPic" style={{
                    backgroundImage: `url(${Vineyard})`
                }}>
                    <h1>wine harvest</h1>
                    <h2>Fake web-app about wines to improve my skills</h2>
                    <a href="/">Shop now</a>
                </div>
            </div>
        </div>
    )
}

export default Directory;