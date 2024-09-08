import { UserService } from "./users.service";
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    getUsers(): string;
}
