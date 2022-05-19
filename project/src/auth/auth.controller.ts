import {Body, Controller, Get, Post, Req, Res} from '@nestjs/common';
import {ApiTags} from "@nestjs/swagger";
import {CreateUserDto} from "../users/dto/create-user.dto";
import {AuthService} from "./auth.service";
import {LoginUserDto} from "./dto/login-user.dto";
import { Response, Request } from 'express'

@ApiTags('Авторизация')
@Controller('auth')
export class AuthController {

    constructor(private authService: AuthService) {}

    @Post('/login')
    login(@Body() userDto: LoginUserDto) {
        return this.authService.login(userDto)
    }

    @Post('/registration')
    registration(@Body() userDto: CreateUserDto) {
        return this.authService.registration(userDto)
    }
    @Get('/check')
    getChecking(@Req() req: Request, @Res() res: Response) {
        return this.authService.check(req, res)
    }
}
