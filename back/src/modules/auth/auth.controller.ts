import { Body, Controller, Get, Post, Res, UsePipes, ValidationPipe } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { Response } from "express";
import { AuthDto } from "./authDto/authDto";

@Controller("auth")
export class AuthController {
    constructor(private readonly authService: AuthService) { }
    @Get()
    getAuth() {
        return this.authService.getAuth();
    }
    @Post("signin")
    @UsePipes(new ValidationPipe({ whitelist: true, forbidNonWhitelisted: true }))
    singin(
        @Body() AuthDto: AuthDto,
        @Res() res: Response
    ) {
        const validate = this.authService.singin(AuthDto);
           if(validate){
            return res.status(201).json({
                message: 'Sesion iniciada con exito',
                validate
            })
        }
        return res.status(400).json({
            message: 'Email o password incorrectos',
            validate
        })
    
    }
}