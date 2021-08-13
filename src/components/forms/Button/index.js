import React from "react";
import "./styles.scss";

const Button = ({ children, src, ...otherProps }) => {
    return (
        <button className="button" {...otherProps}>
            {children}
        </button>
    )
}

export default Button;