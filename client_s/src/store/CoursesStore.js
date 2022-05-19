import {makeAutoObservable, toJS} from "mobx";

export default class CoursesStore {
    constructor() {
        this._courses=[1, 2]
        makeAutoObservable(this)
    }

    setCourses(courses) {
        this._courses = courses
    }

    get courses() {
        return this._courses
    }
}