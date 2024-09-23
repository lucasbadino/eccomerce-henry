import { Injectable } from "@nestjs/common";
import { UsersRepository } from "./users.repository";
import { User } from "./usersDto/usersDto";

@Injectable()
export class UserService {


    constructor(private readonly usersRepository: UsersRepository) { }
    getUsers() {
        return this.usersRepository.getUsers();
    }
    getUserById(id: number) {
        return this.usersRepository.getUserById(id);
    }
    CreateUser(user: Omit<User, "id">) {
        return this.usersRepository.createUser(user);
    }
    updateUser(id: number, user: Omit<User, "id">) {
        return this.usersRepository.uptadeUser(id, user);
    }
    deleteUser(id: number) {
        return this.usersRepository.deleteUser(id);
    }

}