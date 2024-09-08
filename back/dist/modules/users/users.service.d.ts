import { UsersRepository } from "./users.repository";
export declare class UserService {
    private readonly usersRepository;
    constructor(usersRepository: UsersRepository);
    getUsers(): {
        id: number;
        email: string;
        name: string;
        password: string;
        address: string;
        phone: string;
        country: string;
        city: string;
    }[];
}
