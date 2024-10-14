import { UserService } from "./users.service";
import { CreateUserDto, UpdateUserData } from "./usersDto/usersDto";
import { Response } from "express";
import { Users } from "./users.entity";
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    getUsers(): Promise<Users[]>;
    getUserById(id: string, res: Response): Promise<Response<any, Record<string, any>>>;
    createUser(res: Response, CreateUserDto: CreateUserDto): Promise<Response<any, Record<string, any>>>;
    updateUser(idNumber: string, UpdateUserData: UpdateUserData, res: Response): Promise<Response<any, Record<string, any>>>;
    deleteUser(idNumber: string, res: Response): Promise<Response<any, Record<string, any>>>;
}
