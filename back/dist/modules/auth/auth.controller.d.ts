import { AuthService } from "./auth.service";
import { Response } from "express";
import { LoginUserDto } from "./authDto/authDto";
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    getAuth(): string;
    singin(LoginUserDto: LoginUserDto, res: Response): Response<any, Record<string, any>>;
}
