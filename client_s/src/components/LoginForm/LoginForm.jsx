import React from 'react';
import {observer} from "mobx-react-lite";
import {useNavigate} from "react-router-dom";
import {useContext, useState} from "react";
import {Context} from "../../index";
import {login} from "../../http/userAPI";
import style from "./LoginForm.module.scss";
import {Spacer, SpacerAxis} from "../Spacer/Spacer";
import {Input} from "../Input/Input";
import {Button, ButtonTheme} from "../Button/Button";

const LoginForm = observer(() => {
    const navigate = useNavigate()

    const {user} = useContext(Context)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const signIn = async (event) => {
        event.preventDefault();
        try {
            let data;
            data = await login(email, password)
            user.setUser(data)
            user.setIsAuth(true)
            navigate('/')
        } catch (e) {
            alert(e.response.data.message())
        }
    }

    return (
        <form
            className={`${style.container}`}
        >
            <div className={style.title}>Войдите в аккаунт</div>
            <Spacer size={45} axis={SpacerAxis.VERTICAL} />
            <Input
                type="text"
                placeholder="Введите email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                required={true}
            />
            <Spacer size={45} axis={SpacerAxis.VERTICAL} />
            <Input
                placeholder="Введите ваш пароль..."
                type="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                required={true}
            />
            <Spacer size={45} axis={SpacerAxis.VERTICAL} />
            <Button
                theme={ButtonTheme.DARK}
                onClick={signIn}
                text="Войти"
            />
        </form>
    );
});

export {LoginForm}