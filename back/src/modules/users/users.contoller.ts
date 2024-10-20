import { Controller, Delete, Get, Post, Put, Res, Param, Body, UseGuards, ParseUUIDPipe, HttpException, HttpStatus, Req } from "@nestjs/common";
import { UserService } from "./users.service";
import { CreateUserDto, UpdateUserData } from "./usersDto/usersDto";
import { Response } from "express";
import { AuthGuard } from "../auth/authGuard/auth.guard";
import { Users } from "./users.entity";
import { Roles } from "../auth/authRoles/roles.decorator";
import { Role } from "../auth/authRoles/roles.auth";
import { RoleGuard } from "../auth/authGuard/role.guard";
import { ApiBearerAuth, ApiTags } from "@nestjs/swagger";

@ApiTags('Users')
@ApiBearerAuth()
@Controller("users")
export class UserController {
    constructor(private readonly userService: UserService) { }
    @Roles(Role.Admin)
    @UseGuards(AuthGuard, RoleGuard)
    @Get()
    async getUsers(): Promise<Users[]> {
        try {
            return await this.userService.getUsers();
        } catch (error) {
            throw new HttpException('Error al obtener los usuarios', HttpStatus.BAD_REQUEST);
        }
    }

    @UseGuards(AuthGuard)
    @ApiBearerAuth()
    @Get(":id")
    async getUserById(@Param("id") id: string, @Res() res: Response) {
        try {
            const user = await this.userService.getUserById(id);
            return res.status(200).send(user);

        } catch (error) {
            throw new HttpException('Error al obtener el usuario', HttpStatus.NOT_FOUND);
        }
    }
    
    @Post()
    async createUser(@Res() res: Response, @Body() CreateUserDto: CreateUserDto) {
        try {
            const { id } = await this.userService.CreateUser(CreateUserDto);
            return res.status(201).json(`Usuario creado con exito con el id: ${id}`);
        } catch (error) {
            throw new HttpException('Error al crear el usuario', HttpStatus.BAD_REQUEST);

        }
    }
    @UseGuards(AuthGuard)
    @Put(":id")
    async updateUser(@Param("id", ParseUUIDPipe) idNumber: string, @Body() UpdateUserData: UpdateUserData, @Res() res: Response) {
        try {
            const user = await this.userService.getUserById(idNumber);
        } catch (error) {
            throw new HttpException('Usuario no encontrado', HttpStatus.NOT_FOUND);
        }
        try {
            const updatedUser = await this.userService.updateUser(idNumber, UpdateUserData);
            return res.status(201).json(`Usuario actualizado con exito: ${updatedUser.id}`);
        } catch (error) {
            throw new HttpException('Error al actualizar el usuario', HttpStatus.BAD_REQUEST);
        }
    }
    @UseGuards(AuthGuard)
    @Delete(":id")
    async deleteUser(@Param("id", ParseUUIDPipe) idNumber: string, @Res() res: Response) {
        try {
            const deletedUser = await this.userService.deleteUser(idNumber);
            const { id } = deletedUser
            return res.status(200).json(`Usuario eliminado con exito: ${id}`);
        } catch (error) {
            throw new HttpException('Error al eliminar el usuario', HttpStatus.NOT_FOUND);
        }
    }

}