import {BelongsToMany, Column, DataType, Model, Table} from "sequelize-typescript";
import {ApiProperty} from "@nestjs/swagger";
import {Role} from "../roles/roles.models";
import {UserRoles} from "../roles/user-roles.model";
import {User} from "../users/users.models";
import {UserCourses} from "./user-courses.model";

interface CourseCreationAttrs {
    title: string;
    tag: string;
    status: string;
    content: string;
    image: string,
    author_id: number
}

@Table({tableName: 'courses'})
    export class Course extends Model<Course, CourseCreationAttrs> {

    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;

    @Column({type: DataType.STRING, unique: true, allowNull: false})
    title: string;

    @Column({type: DataType.STRING, allowNull: false})
    tag: string;

    @Column({type: DataType.STRING, allowNull: false})
    status: string;

    @Column({type: DataType.STRING, allowNull: false})
    content: string;

    @Column({type: DataType.STRING, allowNull: true})
    image: string;

    @Column({type: DataType.INTEGER, allowNull: true})
    author_id: number;

    @BelongsToMany(() => User, () => UserCourses)
    users: User[]
}