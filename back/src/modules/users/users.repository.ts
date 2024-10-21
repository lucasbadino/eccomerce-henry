import { HttpException, HttpStatus, Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Users } from "./users.entity";
import { Repository } from "typeorm";
import { CreateUserDto, UpdateUserData } from "./usersDto/usersDto";
import * as bcrypt from 'bcrypt';
@Injectable()
export class UsersRepository {

    @InjectRepository(Users)
    private usersRepository: Repository<Users>;

    async getUsers() {
        const users = await this.usersRepository.find(
            {
                select: ["id", "email", "name", "address", "phone", "country", "city"],
                relations: { orders: true, },
                order: { id: "ASC" }
            }
        );
        return users;
    }
    async getUserById(id: string) {
        const user = await this.usersRepository.findOne({ where: { id } })        
        if (!user) {
            throw new NotFoundException("User not found")
        }
        const { password, ...rest } = user;
        return rest;
    }
    async getUserByEmail(email: string) {
        const user = await this.usersRepository.findOne({ where: { email } })
        return user
    }
    async createUser(user: CreateUserDto) {
        try {
            const hassedPassword = await bcrypt.hash(user.password, 10);
            if (hassedPassword) {
                user.password = hassedPassword
                delete user.confirmPassword
                const newUser = await this.usersRepository.create(user);
                if (newUser) {
                    const { password, ...rest } = newUser;
                    return rest
                }
            }
        } catch (error) {
            throw new HttpException('Error al crear el usuario', HttpStatus.NOT_FOUND);
        }
    }
    async uptadeUser(id: string, user: UpdateUserData) {
        const updatedUser = await this.getUserById(id)
        if (!updatedUser) {
            throw new HttpException("User not found", HttpStatus.NOT_FOUND)
        }
        if (updatedUser) {
            await this.usersRepository.update(id, user)
            return updatedUser
        }
        throw new Error("User not found");
    }
    async deleteUser(id: string) {
        const deletedUser = await this.getUserById(id)
        if (!deletedUser) {
            throw new HttpException("User not found", HttpStatus.NOT_FOUND)
        }
        await this.usersRepository.delete(id)
        return deletedUser;
    }
}
