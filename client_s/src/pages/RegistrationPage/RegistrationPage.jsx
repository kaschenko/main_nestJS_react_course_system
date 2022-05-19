import React from 'react';
import {observer} from "mobx-react-lite";
import {RegisterForm} from "../../components/RegisterForm/RegisterForm";
import style from './RegistrationPage.module.scss'

const RegistrationPage = observer(() => {

    return (
        <div className={style.form}>
            <RegisterForm />
        </div>
    );
});

export {RegistrationPage};