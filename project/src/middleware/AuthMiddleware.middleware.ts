// import { Injectable, NestMiddleware } from '@nestjs/common';
// import { Request, Response, NextFunction } from 'express';
// import {JwtService} from "@nestjs/jwt"
// import {JwtVerifyOptions} from "@nestjs/jwt/dist/interfaces/jwt-module-options.interface";
// const jwt = require('jsonwebtoken')
// @Injectable()
// export class AuthMiddleware implements NestMiddleware {
//     private jwtService: any;
//     use(req: Request, res: Response, next: NextFunction) {
//
//         const secretKey = process.env.SECRET_KEY
//         if (req.method === "OPTIONS") {
//             next()
//         }
//         try {
//             const token = req.headers.authorization.split(' ')[1]
//             if (!token) {
//                 return res.status(401).json({message: "Не авторизован"})
//             }
//             const decoded: any = jwt.verify(token, secretKey)
//             req.body.user = decoded
//             next()
//         } catch (e) {
//             const token = req.headers.authorization.split(' ')[1]
//             const decoded: any = jwt.verify(token, secretKey)
//             console.log(decoded)
//             res.status(401).json({message: "Не авторизован"})
//         }
//     }
// }
