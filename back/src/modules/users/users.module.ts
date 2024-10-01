import { Module } from "@nestjs/common";
import { UserService } from "./users.service";
import { UserController } from "./users.contoller";
import { UsersRepository } from "./users.repository";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Users } from "./users.entity";

@Module({
    imports: [
        TypeOrmModule.forFeature([Users]),
    ],
    providers: [UserService, UsersRepository],
    controllers: [UserController],
    exports: [UserService],
})
export class UserModule { }