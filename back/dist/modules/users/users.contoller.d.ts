import { UserService } from "./users.service";
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
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
