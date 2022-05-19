import React, {useContext, useState} from "react";
import style from "./CourseCard.module.scss";
import {Button, ButtonTheme} from "../Button/Button";
import {Context} from "../../index";
import {toJS} from "mobx";
import {giveCourseToUser} from "../../http/coursesAPI";
import {observer} from "mobx-react-lite";
import {useNavigate} from "react-router-dom";
import {getUserById} from "../../http/userAPI";





const CourseCard = observer(({ title, status, author, courseId, path}) => {
    const {user} = useContext(Context)
    const navigate = useNavigate()
    const [authorName, setAuthorName] = useState("")
    getUserById(Number(author)).then(r => setAuthorName(`${r.surname} ${r.name} ${r.patronymic}`))


    const giveCourse = async (event) => {
        try {
            let data;
            data = await giveCourseToUser(toJS(user)._user.id, courseId)
        } catch (e) {
            alert(e.response.data.message())
        }
    }

    let isCourse = false
    let coursesIds = [0]
    if (user._user.courses) {
        let preCoursesIds = toJS(user)._user.courses
        coursesIds = preCoursesIds.map(course => course.id)
    }

    const giveCourseToUserCard = async (event) => {
        try {
            let data;
            data = await giveCourseToUser(user._user.id, courseId)
            window.location.reload();
        } catch (e) {
            alert(e.response.data.message())
        }
    }
    const goToCourse = event => {
        event.preventDefault()
        navigate(`/courses/:${courseId}`)
    }




    return (
        <div className={style.container}>
            <img
                src={process.env.REACT_APP_API_URL + `${path}`}
                alt=""
                className={style.icon}
            />
            <div className={style.text}>
                <div className={style.title}>{title}</div>
                <div className={style.supervisor}>{authorName}</div>
            </div>
            <div className={style.elements}>
                <div className={style.open}>{status}</div>
                { coursesIds.find(el => el === courseId) ?
                    <Button theme={ButtonTheme.DARK} text={"Войти"} onClick={goToCourse}/>
                    :
                    <Button theme={ButtonTheme.DARK} text={"Записаться"} onClick={giveCourseToUserCard}/>

                }
            </div>
        </div>
    );
});

export {CourseCard};