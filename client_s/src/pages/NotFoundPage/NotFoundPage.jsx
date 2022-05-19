import React from "react";
import { Link } from "react-router-dom";
import style from "./NotFoundPage.module.css";
import { motion } from 'framer-motion'
import Liquid from "../../animatedComponents/LiquidComponent/Liquid.svg"

const divVariants = {
    visible: {
        color: ["#6246ea", "#4B0082", "#800080", "#9932CC", "#9370DB", "#EE82EE", "#6246ea"],
        transition: {
            delay: 1,
            duration: 7,
            repeat: Infinity,
            repeatDelay: 0.8,
            type: "spring",
        },
    },
    hidden: {
        borderRadius: 5,
        padding: 8,
        boxShadow: "0px 0px 3px #6246ea",
    },
    hover: {
        scale: 1.1,
        borderRadius: "10px",
        padding: "10px",
        boxShadow: "0px 0px 6px #6246ea",
        transition: {
            duration: 1.4,
            yoyo: Infinity
        }

    }
}
const pageVariants = {
    visible: {
        color: ["#6246ea", "#4B0082", "#800080", "#9932CC", "#9370DB", "#EE82EE", "#6246ea"],
        transition: {
            delay: 1,
            duration: 7,
            repeat: Infinity,
            repeatDelay: 0.8,
            type: "spring",
        },

    },
    hidden: {
        borderRadius: 5,
        padding: 8,
        boxShadow: "0px 0px 3px #6246ea",
    }
}
const reverse = "reverse"
const errorVariants = {
    visible: {
        rotate: [0, 0, 360, 360, 0],
        borderRadius: ["20%", "20%", "50%", "50%", "20%"],
        y: -10,

        transition: {
            repeat: Infinity,
            repeatType: reverse,
            repeatDelay: 0.3,
            delay: 1,
            duration: 4
        }
    }
}

const NotFoundPage = () => {
    return (
        <div className={style.container}>
            <motion.div className={style.mainTitle}
                        variants={errorVariants}
                        animate="visible"
            >
                404
            </motion.div>
            <motion.div className={style.title}
                        variants={pageVariants}
                        initial="hidden"
                        animate="visible"
            >Страница не найдена!</motion.div>
            <Link to="/" className={style.link}>
                <motion.div
                    variants={divVariants}
                    whileHover = "hover"
                    initial = "hidden"
                    animate="visible"
                >
                    Вернуться на главную
                </motion.div>
            </Link>
        </div>
    );
};

export {NotFoundPage};
