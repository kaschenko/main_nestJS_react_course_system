import React from 'react';
import { useParams } from "react-router-dom";

const SingleCoursePage = () => {
    const {courseId} = useParams()

    return (
        <div>
            SingleCoursePage
        </div>
    );
};

export {SingleCoursePage};