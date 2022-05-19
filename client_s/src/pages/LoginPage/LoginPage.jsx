import React from 'react';
import {observer} from "mobx-react-lite";
import style from './LoginPage.module.scss'
import {LoginForm} from "../../components/LoginForm/LoginForm";

const LoginPage = observer(() => {

    return (
        <div className={style.form}>
            <LoginForm />
        </div>
    );
});

export {LoginPage};