import {HttpException, HttpStatus, Injectable} from '@nestjs/common';
import {InjectModel} from "@nestjs/sequelize";
import {User} from "./users.models";
import {CreateUserDto} from "./dto/create-user.dto";
import {RolesService} from "../roles/roles.service";
import {AddRoleDto} from "./dto/add.role.dto";
import {AddCourseDto} from "./dto/add-course.dto";
import {CoursesService} from "../courses/courses.service";

@Injectable()
export class UsersService {

    constructor(@InjectModel(User) private userRepository: typeof User,
                private roleService: RolesService, private coursesService: CoursesService) {
    }

    async createUser(dto: CreateUserDto) {
        const user = await this.userRepository.create(dto);
        const role = await this.roleService.getRoleByValue("USER")
        await user.$set('roles', [role.id])
        user.roles = [role]
        return user;
    }

    async getAllUsers() {
        const users = await this.userRepository.findAll({include: {all: true}})
        return users;
    }

    async getUserByEmail(email: string) {
        const user = await this.userRepository.findOne({where: {email}, include: {all: true}})
        return user
    }
    async getUserById(id: number) {
        const user = await this.userRepository.findOne({where: {id}, include: {all: true}})
        return user
    }
    async addRole(dto: AddRoleDto) {
        const user = await this.userRepository.findByPk(dto.userId)
        const role = await this.roleService.getRoleByValue(dto.value)
        if (role && user) {
            await user.$add("role", role.id)
            return dto
        }
        throw new HttpException('Пользователь или роль не найдены', HttpStatus.NOT_FOUND)
    }

    async addCourse(dto: AddCourseDto) {
        const user = await this.userRepository.findByPk(dto.userId)
        const course = await this.coursesService.getCourseById(dto.courseId)
        if (user && course) {
            await user.$add('course', course.id)
            return dto;
        }
        throw new HttpException('Пользователь или курс не найден', HttpStatus.NOT_FOUND)
    }
}
