import { UserService } from "./users.service";
import { CreateUserDto, UpdateUserDto } from "./usersDto/usersDto";
import { Request, Response } from "express";
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    getUsers(): {
        id: number;
        email: string;
        name: string;
        address: string;
        phone: string;
        country: string;
        city: string;
    }[];
    getUserById(res: Response, req: Request): Response<any, Record<string, any>>;
    createUser(res: Response, CreateUserDto: CreateUserDto): Response<any, Record<string, any>>;
    updateUser(idNumber: number, UpdateUserDto: UpdateUserDto, res: Response): Response<any, Record<string, any>>;
    deleteUser(idNumber: number, res: Response): Response<any, Record<string, any>>;
}
