import { Controller, Delete, Get, HttpCode, Post, Put, Res, Req, Param, Body, UsePipes, ValidationPipe, UseGuards } from "@nestjs/common";
import { UserService } from "./users.service";
import { CreateUserDto, UpdateUserDto, User } from "./usersDto/usersDto";
import { Request, Response } from "express";
import { AuthGuard } from "../auth/authGuard/auth.guard";


@Controller("users")
export class UserController {
    constructor(private readonly userService: UserService) { }
    @HttpCode(200)
    @UseGuards(AuthGuard)
    @Get()
    getUsers() {
        return this.userService.getUsers();
    }

    @Get(":id")
    getUserById(@Res() res: Response, @Req() req: Request) {
        const { id } = req.params
        const user = this.userService.getUserById(Number(id));
        return res.status(200).send(user);
    }

    @Post()
    @UsePipes(new ValidationPipe({ whitelist: true, forbidNonWhitelisted: true }))
    createUser(@Res() res: Response, @Body() CreateUserDto: CreateUserDto) {
        const id = this.userService.CreateUser(CreateUserDto);
        return res.status(201).json(`Usuario creado con exito con el id: ${id}`);
    }
    @Put(":id")
    @UsePipes(new ValidationPipe({ whitelist: true, forbidNonWhitelisted: true }))
    updateUser(@Param("id") idNumber: number, @Body() UpdateUserDto: UpdateUserDto, @Res() res: Response) {
        const updatedUser = this.userService.updateUser(Number(idNumber), UpdateUserDto);
        const { id } = updatedUser
        return res.status(201).json(`Usuario actualizado con exito: ${id}`);
    }
    @Delete(":id")
    deleteUser(@Param("id") idNumber: number, @Res() res: Response) {
        const deletedUser = this.userService.deleteUser(Number(idNumber));
        const { id } = deletedUser
        return res.status(200).json(`Usuario eliminado con exito: ${id}`);
    }

}