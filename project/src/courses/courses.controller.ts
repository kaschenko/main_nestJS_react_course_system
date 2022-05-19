import {Body, Controller, Get, Param, Post, UploadedFile, UseInterceptors} from '@nestjs/common';
import {CreateCourseDto} from "./dto/create-course.dto";
import {CoursesService} from "./courses.service";
import {FileInterceptor} from "@nestjs/platform-express";

@Controller('courses')
export class CoursesController {

    constructor(private coursesService: CoursesService) {
    }

    @Post()
    @UseInterceptors(FileInterceptor('image'))
    create(
        @Body() courseDto: CreateCourseDto,
        @UploadedFile() image
    ) {
        return this.coursesService.createCourse(courseDto, image)
    }
    @Get()
    getAll() {
        return this.coursesService.getAllCourses()
    }
    @Get('/:courseId')
    getById(@Param('courseId') courseId: number) {
        return this.coursesService.getCourseById(courseId)
    }
}
