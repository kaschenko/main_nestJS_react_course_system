import React from "react";

import style from "./SearchBar.module.scss";
import {Input} from "../Input/Input";


const SearchBar = ({ value, onChange }) => {
    return (
        <div className={style.container}>
            <Input
                type="text"
                placeholder="Поиск"
                value={value}
                onChange={onChange}
            />
        </div>
    );
};

export {SearchBar};