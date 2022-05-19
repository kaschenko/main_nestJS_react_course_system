import React, {useContext, useState} from 'react';
import style from "./Register.module.scss";
import {Spacer, SpacerAxis} from "../Spacer/Spacer";
import {Input} from "../Input/Input";
import {Button, ButtonTheme} from "../Button/Button";
import {useNavigate} from "react-router-dom";
import {Context} from "../../index";
import {registration} from "../../http/userAPI";
import {observer} from "mobx-react-lite";

const RegisterForm = observer(() => {
    const navigate = useNavigate()

    const {user} = useContext(Context)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')
    const [surname, setSurname] = useState('')
    const [patronymic, setPatronymic] = useState('')
    const [university, setUniversity] = useState('')

    const signIn = async (event) => {
        event.preventDefault();
        try {
            let data;
            data = await registration(email, password, name, surname, patronymic, university)
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
            <div className={style.title}>Регистрация</div>
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
            <Input
                type="text"
                placeholder="Введите ваше имя..."
                value={name}
                onChange={e => setName(e.target.value)}
                required={true}
            />
            <Spacer size={45} axis={SpacerAxis.VERTICAL} />
            <Input
                type="text"
                placeholder="Введите вашу фамилию..."
                value={surname}
                onChange={e => setSurname(e.target.value)}
                required={true}
            />
            <Spacer size={45} axis={SpacerAxis.VERTICAL} />
            <Input
                type="text"
                placeholder="Введите ваше отчество (при наличи) ..."
                value={patronymic}
                onChange={e => setPatronymic(e.target.value)}
            />
            <Spacer size={45} axis={SpacerAxis.VERTICAL} />
            <Input
                type="text"
                placeholder="Введите ваш университет..."
                value={university}
                onChange={e => setUniversity(e.target.value)}
                required={true}
            />
            <Spacer size={45} axis={SpacerAxis.VERTICAL} />
            <Button
                theme={ButtonTheme.DARK}
                onClick={signIn}
                text="Зарегистрироваться"
            />
        </form>
    );
});

export {RegisterForm};