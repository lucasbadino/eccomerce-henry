import { Module } from "@nestjs/common";
import { UserService } from "./users.service";
import { UserController } from "./users.contoller";
import { UsersRepository } from "./users.repository";

@Module({
    providers: [UserService, UsersRepository],
    controllers: [UserController],
})
export class UserModule { }