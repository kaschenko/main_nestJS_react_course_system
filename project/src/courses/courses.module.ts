import { Module } from '@nestjs/common';
import { CoursesController } from './courses.controller';
import { CoursesService } from './courses.service';
import {SequelizeModule} from "@nestjs/sequelize";
import {Course} from "./courses.model";
import {User} from "../users/users.models";
import {UserCourses} from "./user-courses.model";
import {FilesModule} from "../files/files.module";

@Module({
  controllers: [CoursesController],
  providers: [CoursesService],
  imports: [
      SequelizeModule.forFeature([Course, User, UserCourses]),
      FilesModule
  ],
  exports: [
        CoursesService
    ]

})
export class CoursesModule {}
