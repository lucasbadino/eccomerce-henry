import { AuthRepository } from "./auth.repository";
import { LoginUserDto, singupDto } from "./authDto/authDto";
export declare class AuthService {
    private readonly AuthRepository;
    constructor(AuthRepository: AuthRepository);
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
