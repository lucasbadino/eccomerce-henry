import { Body, Controller, Get, HttpException, HttpStatus, Post, Res, UsePipes, ValidationPipe } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { Response } from "express";
import { LoginUserDto } from "./authDto/authDto";

@Controller("auth")
export class AuthController {
    constructor(private readonly authService: AuthService) { }
    @Get()
    getAuth() {
        try {
            return this.authService.getAuth();
        } catch (error) {
            throw new HttpException('Error al iniciar sesion', HttpStatus.NOT_FOUND);
        }
    }
    @Post("signin")
    singin(@Body() LoginUserDto: LoginUserDto, @Res() res: Response) {
        try {
            const validate = this.authService.singin(LoginUserDto)
            if (validate) {
                return res.status(201).json({
                    message: 'Sesion iniciada con exito',
                    validate
                })
            }
        } catch (error) {
            throw new HttpException('Error al iniciar sesion', HttpStatus.NOT_FOUND);
        }
    }
}