import { Injectable } from "@nestjs/common";
import { UsersRepository } from "./users.repository";


@Injectable()
export class UserService {


    constructor(private readonly usersRepository: UsersRepository) { }
    async getUsers() {
        return await this.usersRepository.getUsers();
    }
    async getUserById(id) {
        return await this.usersRepository.getUserById(id);
    }
    async CreateUser(user) {
        return await this.usersRepository.createUser(user);
    }
    async updateUser(id, user) {
        return await this.usersRepository.uptadeUser(id, user);
    }
    async deleteUser(id) {
        return await this.usersRepository.deleteUser(id);
    }

}