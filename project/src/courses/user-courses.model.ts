import {BelongsToMany, Column, DataType, ForeignKey, Model, Table} from "sequelize-typescript";
import {ApiProperty} from "@nestjs/swagger";
import {Role} from "../roles/roles.models";
import {UserRoles} from "../roles/user-roles.model";
import {User} from "../users/users.models";
import {Course} from "./courses.model";


@Table({tableName: 'user_courses', createdAt: false, updatedAt: false})
export class UserCourses extends Model<UserCourses> {

    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;

    @ForeignKey(() => Course)
    @Column({type: DataType.INTEGER})
    courseId: number;

    @ForeignKey(() => User)
    @Column({type: DataType.INTEGER})
    userId: number;

}