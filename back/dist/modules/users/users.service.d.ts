import { UsersRepository } from "./users.repository";
export declare class UserService {
    private readonly usersRepository;
    constructor(usersRepository: UsersRepository);
    getUsers(): Promise<import("./users.entity").Users[]>;
    getUserById(id: any): Promise<{
        id: string;
        name: string;
        email: string;
        phone: number;
        country: string;
        address: string;
        city: string;
        orders: import("../orders/orders.entity").Orders[];
    }>;
    CreateUser(user: any): Promise<import("./users.entity").Users>;
    updateUser(id: any, user: any): Promise<{
        id: string;
        name: string;
        email: string;
        password: string;
        phone: number;
        country: string;
        address: string;
        city: string;
        orders: import("../orders/orders.entity").Orders[];
    }>;
    deleteUser(id: any): Promise<{
        id: string;
        name: string;
        email: string;
        phone: number;
        country: string;
        address: string;
        city: string;
        orders: import("../orders/orders.entity").Orders[];
    }>;
}
