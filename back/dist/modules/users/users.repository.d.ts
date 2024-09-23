import { User } from "./usersDto/usersDto";
export declare class UsersRepository {
    private users;
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
    createUser(user: Omit<User, "id">): number;
    uptadeUser(id: number, user: Omit<User, "id">): {
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
