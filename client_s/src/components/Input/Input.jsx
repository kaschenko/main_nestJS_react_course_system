import React from "react";
import style from "./Input.module.scss";


const Input = ({
                   type,
                   placeholder,
                   value,
                   onChange,
                   required = false,
               }) => {

    return (
        <input
            type={type}
            className={style.input}
            placeholder={placeholder}
            autoCorrect="off"
            autoComplete="off"
            spellCheck="false"
            value={value}
            onChange={(event) => onChange(event.target.value)}
            required={required}
        />
    );
};

export {Input};
