import { UsersRepository } from "./users.repository";
import { User } from "./usersDto/usersDto";
export declare class UserService {
    private readonly usersRepository;
    constructor(usersRepository: UsersRepository);
    getUsers(): {
        id: number;
        email: string;
        name: string;
        address: string;
        phone: string;
        country: string;
        city: string;
    }[];
    getUserById(id: number): {
        id: number;
        email: string;
        name: string;
        address: string;
        phone: string;
        country: string;
        city: string;
    };
    CreateUser(user: Omit<User, "id">): number;
    updateUser(id: number, user: Omit<User, "id">): {
        id: number;
        email: string;
        name: string;
        password: string;
        address: string;
        phone: string;
        country: string;
        city: string;
    };
    deleteUser(id: number): {
        id: number;
        email: string;
        name: string;
        password: string;
        address: string;
        phone: string;
        country: string;
        city: string;
    };
}
