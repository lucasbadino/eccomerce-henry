import { Users } from "./users.entity";
import { CreateUserDto, UpdateUserData } from "./usersDto/usersDto";
export declare class UsersRepository {
    private usersRepository;
    getUsers(): Promise<Users[]>;
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
    getUserByEmail(email: string): Promise<Users>;
    createUser(user: CreateUserDto): Promise<{
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
    uptadeUser(id: string, user: UpdateUserData): Promise<{
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
