import {ApiProperty} from "@nestjs/swagger";
import {IsEmail, IsString, Length} from "class-validator";

export class CreateUserDto {
    @ApiProperty({example: "user@mail.ru", description: 'Почта'})
    @IsString({message: 'Должно быть строкой'})
    @IsEmail({}, {message: "Некорректный email"})
    readonly email: string;

    @ApiProperty({example: "1234", description: 'Пароль'})
    @IsString({message: 'Должно быть строкой'})
    @Length(8, 16, {message: "Пароль должен включать от 8 до 16 символов"})
    readonly password: string;

    @ApiProperty({example: "Nikita", description: 'Имя пользователя'})
    @IsString({message: 'Должно быть строкой'})
    readonly name: string;

    @ApiProperty({example: "Кащенко", description: 'Фамилия пользователя'})
    @IsString({message: 'Должно быть строкой'})
    readonly surname: string;

    @ApiProperty({example: "Алексеевич", description: 'Отчество пользователя'})
    @IsString({message: 'Должно быть строкой'})
    readonly patronymic: string;

    @ApiProperty({example: "МИФИ", description: 'Университет пользователя'})
    @IsString({message: 'Должно быть строкой'})
    readonly university: string;
}