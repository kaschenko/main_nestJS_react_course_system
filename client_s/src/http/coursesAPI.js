import {$authHost, $host} from "./index";
import jwt_decode from "jwt-decode";


export const fetchCourses = async () => {
    const {data} = await $host.get('courses')
    return data
}

export const giveCourseToUser = async (userId, courseId) => {
    try {
        const {data} = await $host.post('users/give_course', {userId, courseId})
    } catch (e) {
        return false
    }
    return true
}

// export const fetchOneDevice = async (id) => {
//     const {data} = await $host.get('api/device/' + id)
//     return data
// }