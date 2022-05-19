import React, {useContext, useEffect} from "react";
import style from "./CoursesBoard.module.scss"
import {fetchCourses} from "../../http/coursesAPI";
import {Context} from "../../index";
import {CourseCard} from "../CourseCard/CourseCard";
import {observer} from "mobx-react-lite";
import {toJS} from "mobx";


const CourseBoard = observer(({query}) => {
    const {courses} = useContext(Context)
    const {user} = useContext(Context)

    useEffect(() => {
        fetchCourses().then(data => courses.setCourses(data))
    }, [])


    return (
        <div className={style.container} key={courses.id} >
            {toJS(courses)._courses.map((course, pos) => (
                <div className={style.card} key={pos}>
                    <CourseCard
                        courseId={course.id}
                        title={course.title}
                        path={course.image}
                        author={course.author_id}
                        status={course.status}
                    />
                </div>
            ))}
        </div>
    );
});

export {CourseBoard};
