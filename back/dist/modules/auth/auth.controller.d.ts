import { AuthService } from "./auth.service";
import { Response } from "express";
import { AuthDto } from "./authDto/authDto";
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    getAuth(): string;
    singin(AuthDto: AuthDto, res: Response): Response<any, Record<string, any>>;
}
