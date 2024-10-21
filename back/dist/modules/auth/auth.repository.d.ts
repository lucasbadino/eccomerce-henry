import { UserService } from "../users/users.service";
import { LoginUserDto, singupDto } from "./authDto/authDto";
import { JwtService } from "@nestjs/jwt";
import { Users } from "../users/users.entity";
import { Repository } from "typeorm";
export declare class AuthRepository {
    private readonly usersService;
    private readonly jwtService;
    private readonly usersRepository;
    constructor(usersService: UserService, jwtService: JwtService, usersRepository: Repository<Users>);
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
