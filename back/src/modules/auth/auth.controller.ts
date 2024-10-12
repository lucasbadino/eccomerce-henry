import { Body, Controller, Get, HttpException, HttpStatus, Post, Res, UsePipes, ValidationPipe } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { Response } from "express";
import { LoginUserDto, singupDto } from "./authDto/authDto";
import { UserService } from "../users/users.service";

@Controller("auth")
export class AuthController {
    constructor(
        private readonly authService: AuthService,
        private readonly usersService: UserService
    ) { }
    @Get()
    getAuth() {
        try {
            return this.authService.getAuth();
        } catch (error) {
            throw new HttpException('Error al iniciar sesion', HttpStatus.NOT_FOUND);
        }
    }
    @Post('signup')
    async singup(@Res() res: Response, @Body() user: singupDto) {
        const email = await this.usersService.getUserByEmail(user.email);
        if (email) {
            throw new HttpException('El email ya existe', HttpStatus.CONFLICT);
        }
        if (user.password !== user.confirmPassword) {
            throw new HttpException('Las contraseñas no coinciden', HttpStatus.BAD_REQUEST);
        }
        try {
            const validate = await this.authService.singup(user)
            return res.status(201).json(validate)
        }
        catch (error) {
            throw new HttpException('Error al crear el usuario', HttpStatus.NOT_FOUND);
        }
    }
    @Post("signin")
    async singin(@Body() LoginUserDto: LoginUserDto, @Res() res: Response) {
        try {
            const success = await this.authService.singin(LoginUserDto);
            return res.status(201).json(success);
        } catch (error) {
            throw new HttpException('Usuario o contraseña incorrecta', HttpStatus.NOT_FOUND);
        }
    }
}