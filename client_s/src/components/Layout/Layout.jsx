import React, {useContext} from 'react';
import {Outlet, useNavigate} from 'react-router-dom'
import { Header } from "../Header/Header";
import {Button, ButtonTheme} from "../Button/Button";
import {Context} from "../../index";
import {observer} from "mobx-react-lite";

const Layout = observer(() => {
    const {user} = useContext(Context)
    const navigate = useNavigate()

    const logOut = () => {
        user.setUser({})
        user.setIsAuth(false)
    }

    const goToProfile = event => {
        event.preventDefault()
        navigate(`/profiles/:${user.id}`)
    }

    return (
        <div>
        <Header>
            {!user.isAuth ?
                <>
                <Button text="Войти" theme={ButtonTheme.DARK} link="/login"/>
                <Button text="Регистрация" theme={ButtonTheme.LIGHT} link="/registration"/>

                </>
                :
                <>
                    <Button text="Личный кабинет" theme={ButtonTheme.DARK} onClick={goToProfile}/>
                    <Button text="Выйти" theme={ButtonTheme.LIGHT} onClick={() => logOut()}/>
                </>
            }


        </Header>
        <Outlet />
        </div>
    );
});

export {Layout};