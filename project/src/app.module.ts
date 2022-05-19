import {MiddlewareConsumer, Module, RequestMethod} from "@nestjs/common";
import {SequelizeModule} from "@nestjs/sequelize";
import { UsersModule } from './users/users.module';
import {ConfigModule} from "@nestjs/config";
import {User} from "./users/users.models";
import { RolesModule } from './roles/roles.module';
import {Role} from "./roles/roles.models";
import {UserRoles} from "./roles/user-roles.model";
import { AuthModule } from './auth/auth.module';
import { CoursesModule } from './courses/courses.module';
import {Course} from "./courses/courses.model";
import {UserCourses} from "./courses/user-courses.model";
// import {AuthMiddleware} from "./middleware/AuthMiddleware.middleware";
import { FilesModule } from './files/files.module';
import {ServeStaticModule} from "@nestjs/serve-static";
import * as path from 'path'

@Module({
    controllers: [],
    providers: [],
    imports: [
        ConfigModule.forRoot({
            envFilePath: `.${process.env.NODE_ENV}.env`
        }),
        ServeStaticModule.forRoot({
            rootPath: path.resolve(__dirname, 'static'),
            exclude: ['/']
        }),
        SequelizeModule.forRoot({
            dialect: 'postgres',
            host: process.env.POSTGRES_HOST,
            port: Number(process.env.POSTGRES_PORT),
            username: process.env.POSTGRES_USER,
            password: process.env.POSTGRES_PASSWORD,
            database: process.env.POSTGRES_DB,
            models: [User, Role, UserRoles, Course, UserCourses],
            autoLoadModels: true
        }),
        UsersModule,
        RolesModule,
        AuthModule,
        CoursesModule,
        FilesModule,
    ]
})
export class AppModule {
    // configure(consumer: MiddlewareConsumer) {
    //     consumer
    //         .apply(AuthMiddleware)
    //         .forRoutes({ path: 'auth/check', method: RequestMethod.ALL });
    // }
}