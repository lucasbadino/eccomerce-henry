import { UserService } from "../users/users.service";
import { LoginUserDto, singupDto } from "./authDto/authDto";
import { JwtService } from "@nestjs/jwt";
export declare class AuthRepository {
    private readonly usersService;
    private readonly jwtService;
    constructor(usersService: UserService, jwtService: JwtService);
    singin(LoginUserDto: LoginUserDto): Promise<{
        success: boolean;
        token: string;
    }>;
    singup(user: singupDto): Promise<{
        id: string;
        name: string;
        email: string;
        phone: number;
        country: string;
        address: string;
        city: string;
        role: import("./authRoles/roles.auth").Role;
        orders: import("../orders/orders.entity").Orders[];
    }>;
}
