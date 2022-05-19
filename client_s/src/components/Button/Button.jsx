import React from "react";
import { Link } from "react-router-dom";
import style from "./Button.module.css";

export const ButtonTheme = {
    DARK: "dark",
    LIGHT: "light",

}


const Button = ({
                    type,
                    link,
                    onClick,
                    theme,
                    text,
                    maxWidth,
                }) => {
    const className = `${style.button} ${style[theme]}`;

    if (link) {
        return (
            <Link to={link} className={className} style={{maxWidth}}>
                {text}
            </Link>
        );
    } else if (type === "submit") {
        return (
            <input
                className={className}
                type={type}
                style={{maxWidth}}
                value={text}
            />
        );
    } else {
        return (
            <button
                className={className}
                type={type}
                style={{maxWidth}}
                onClick={onClick}
            >
                {text}
            </button>
        );
    }
};

export {Button};