import {BelongsToMany, Column, DataType, Model, Table} from "sequelize-typescript";
import {ApiProperty} from "@nestjs/swagger";
import {Role} from "../roles/roles.models";
import {UserRoles} from "../roles/user-roles.model";
import {Course} from "../courses/courses.model";
import {UserCourses} from "../courses/user-courses.model";

interface UserCreationAttrs {
    email: string;
    password: string;
    name: string;
    surname: string;
    patronymic: string;
    university: string;
}

@Table({tableName: 'users'})
export class User extends Model<User, UserCreationAttrs> {
    @ApiProperty({example: "1", description: 'Уникальный индетификатор'})
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;

    @ApiProperty({example: "user@mail.ru", description: 'Почта'})
    @Column({type: DataType.STRING, unique: true, allowNull: false})
    email: string;

    @ApiProperty({example: "1234", description: 'Пароль'})
    @Column({type: DataType.STRING, allowNull: false})
    password: string;

    @ApiProperty({example: "Nikita", description: 'Имя пользователя'})
    @Column({type: DataType.STRING, allowNull: false})
    name: string;

    @ApiProperty({example: "Кащенко", description: 'Фамилия пользователя'})
    @Column({type: DataType.STRING, allowNull: false})
    surname: string;

    @ApiProperty({example: "Алексеевич", description: 'Отчество пользователя'})
    @Column({type: DataType.STRING, allowNull: true})
    patronymic: string;

    @ApiProperty({example: "МИФИ", description: 'Университет пользователя'})
    @Column({type: DataType.STRING, allowNull: false})
    university: string;

    @BelongsToMany(() => Role, () => UserRoles)
    roles: Role[];

    @BelongsToMany(() => Course, () => UserCourses)
    courses: Course[]
}