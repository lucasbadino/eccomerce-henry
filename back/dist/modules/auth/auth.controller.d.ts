import { AuthService } from "./auth.service";
import { Response } from "express";
import { LoginUserDto, singupDto } from "./authDto/authDto";
import { UserService } from "../users/users.service";
export declare class AuthController {
    private readonly authService;
    private readonly usersService;
    constructor(authService: AuthService, usersService: UserService);
    getAuth(): string;
    singup(res: Response, user: singupDto): Promise<Response<any, Record<string, any>>>;
    singin(LoginUserDto: LoginUserDto, res: Response): Promise<Response<any, Record<string, any>>>;
}
