import { UsersRepository } from "./users.repository";
import { CreateUserDto, UpdateUserData } from "./usersDto/usersDto";
export declare class UserService {
    private readonly usersRepository;
    constructor(usersRepository: UsersRepository);
    getUsers(): Promise<import("./users.entity").Users[]>;
    getUserById(id: string): Promise<{
        id: string;
        name: string;
        email: string;
        phone: number;
        country: string;
        address: string;
        city: string;
        role: import("../auth/authRoles/roles.auth").Role;
        orders: import("../orders/orders.entity").Orders[];
    }>;
    getUserByEmail(email: string): Promise<import("./users.entity").Users>;
    CreateUser(user: CreateUserDto): Promise<{
        id: string;
        name: string;
        email: string;
        phone: number;
        country: string;
        address: string;
        city: string;
        role: import("../auth/authRoles/roles.auth").Role;
        orders: import("../orders/orders.entity").Orders[];
    }>;
    updateUser(id: any, user: UpdateUserData): Promise<{
        id: string;
        name: string;
        email: string;
        phone: number;
        country: string;
        address: string;
        city: string;
        role: import("../auth/authRoles/roles.auth").Role;
        orders: import("../orders/orders.entity").Orders[];
    }>;
    deleteUser(id: string): Promise<{
        id: string;
        name: string;
        email: string;
        phone: number;
        country: string;
        address: string;
        city: string;
        role: import("../auth/authRoles/roles.auth").Role;
        orders: import("../orders/orders.entity").Orders[];
    }>;
}
