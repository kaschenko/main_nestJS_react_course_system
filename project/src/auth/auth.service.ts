import {
    Body,
    ExecutionContext,
    HttpException,
    HttpStatus,
    Injectable,
    Post,
    Req,
    Res,
    UnauthorizedException
} from '@nestjs/common';
import {CreateUserDto} from "../users/dto/create-user.dto";
import {UsersService} from "../users/users.service";
import {LoginUserDto} from "./dto/login-user.dto";
import {JwtService} from "@nestjs/jwt";
import * as bcrypt from 'bcryptjs'
import {User} from "../users/users.models";

@Injectable()
export class AuthService {

    constructor(private userService: UsersService,
                private jwtService: JwtService) {}

    async login(userDto: LoginUserDto) {
        const user = await this.validateUser(userDto)
        return this.generateToken(user)
    }

    async registration(userDto: CreateUserDto) {
        const candidate = await this.userService.getUserByEmail(userDto.email)
        if (candidate) {
            throw new HttpException('Пользователь уже существует ', HttpStatus.BAD_REQUEST)
        }
        const hashPassword = await bcrypt.hash(userDto.password, 5)
        const user = await this.userService.createUser({...userDto, password: hashPassword})
        return this.generateToken(user)
    }
    async check(req, res) {
        try {
            const authHeader = req.headers.authorization
            const bearer = authHeader.split(' ')[0]
            const token = authHeader.split(' ')[1]

            if(bearer !== 'Bearer' || !token) {
                throw new UnauthorizedException({message: 'Пользователь не авторизован'})
            }
            const user = this.jwtService.verify(token)
            const updateUser = await this.userService.getUserByEmail(user.email)
            // const newToken = await this.generateTokenForChecking({user}.user)
            const newToken = await this.generateToken(updateUser)
            return res.json(newToken)
        } catch (e) {
            console.log(e)
            throw new UnauthorizedException({message: 'Пользователь не авторизован'})
        }
    }

    private async generateTokenForChecking(user) {
        const payload = {email: user.email, id: user.id, roles: user.roles, courses: user.courses}
        return {
            token: this.jwtService.sign(payload)
        }

    }
    private async generateToken(user: User) {
        const payload = {email: user.email, id: user.id, roles: user.roles, courses: user.courses}
        return {
            token: this.jwtService.sign(payload)
        }

    }

    private async validateUser(userDto: LoginUserDto) {
        const user = await this.userService.getUserByEmail(userDto.email)
        const passwordEquals = await bcrypt.compare(userDto.password, user.password)
        if (user && passwordEquals) {
            return user
        }
        throw new UnauthorizedException({message: 'Некорректный логин или пароль'})
    }
}
