import {$authHost, $host} from "./index";
import jwt_decode from 'jwt-decode'

export const registration = async (email, password, name, surname, patronymic, university) => {
    const {data} = await $host.post('auth/registration', {email, password, name, surname, patronymic, university})
    localStorage.setItem('token', data.token)
    return jwt_decode(data.token)
}

export const login = async (email, password) => {
    const {data} = await $host.post('auth/login', {email, password})
    localStorage.setItem('token', data.token)
    return jwt_decode(data.token)
}

export const check = async () => {
    const {data} = await $authHost.get('/auth/check')
    localStorage.setItem('token', data.token)
    return jwt_decode(data.token)
}

export const getUserById = async (id) => {
    const {data} = await $host.post('users/get_one_user', {id: id})
    return data
}

