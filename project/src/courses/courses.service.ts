import { Injectable } from '@nestjs/common';
import {Course} from "./courses.model";
import {InjectModel} from "@nestjs/sequelize";
import {CreateCourseDto} from "./dto/create-course.dto";
import {FilesService} from "../files/files.service";

@Injectable()
export class CoursesService {

    constructor(@InjectModel(Course) private courseRepository: typeof Course,
                private filesService: FilesService
    ) {
    }

    async createCourse(dto: CreateCourseDto, image: any) {
        const fileName = await this.filesService.createFile(image)
        const course = await this.courseRepository.create({...dto, image: fileName})
        return course;
    }

    async getAllCourses() {
        const courses = await this.courseRepository.findAll()
        return courses
    }

    async getCourseById(id: number) {
        const course = await this.courseRepository.findOne({where: {id}})
        return course
    }
}
