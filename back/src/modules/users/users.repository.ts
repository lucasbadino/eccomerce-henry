import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Users } from "./users.entity";
import { Repository } from "typeorm";

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
        const user = await this.usersRepository.findOneBy({
            id
        });;
        if (!user) {
            throw new Error("User not found");
        }
        const { password, ...rest } = user;
        return rest;
    }
    async getUserByEmail(email: string) {
        const user = await this.usersRepository.findOne({ where: { email } })
        return user
    }
    async createUser(user: Users) {                
        const newUser = await this.usersRepository.create(user);
        await this.usersRepository.save(newUser);
        return newUser
    }
    async uptadeUser(id: string, user: Users) {
        const updatedUser = await this.getUserById(id)
        if (updatedUser) {
            return { ...updatedUser, ...user };
        }
        throw new Error("User not found");
    }
    async deleteUser(id: string) {
        const deletedUser = await this.getUserById(id)
        if (!deletedUser) {
            throw new Error("User not found");
        }
        await this.usersRepository.delete(id)
        return deletedUser;
    }
}
