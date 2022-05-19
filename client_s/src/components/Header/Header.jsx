import React from "react";
import { Link } from "react-router-dom";
import style from "./Header.module.scss";
import { motion } from 'framer-motion'


const Header = ({ children }) => {
    return (
        <header className={style.container}>
            <motion.div
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.8 }}>
                <Link to={"/"} className={style.title}>
                    Courses
                </Link>
            </motion.div>
            <motion.div className={style.buttons} >{children}</motion.div>
        </header>
    );
};

export {Header};
