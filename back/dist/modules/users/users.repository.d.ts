import { Users } from "./users.entity";
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
        orders: import("../orders/orders.entity").Orders[];
    }>;
    createUser(user: Users): Promise<Users>;
    uptadeUser(id: string, user: Users): Promise<{
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
    deleteUser(id: string): Promise<{
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
