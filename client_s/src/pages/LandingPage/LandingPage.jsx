import React, {useState} from 'react';
import {Input} from "../../components/Input/Input";
import {CourseBoard} from "../../components/CoursesBoard/CoursesBoard";
import style from './LandingPage.module.scss'
import {SearchBar} from "../../components/SearchBar/SearchBar";

const LandingPage = () => {
    const [query, setQuery] = useState("")
    console.log(query)
    return (
        <div className={style.section}>
            <SearchBar value={query} onChange={e => setQuery(e)} />
            <CourseBoard query={query}/>
        </div>
    );
};

export {LandingPage};