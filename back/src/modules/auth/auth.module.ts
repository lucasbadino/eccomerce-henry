import { Module } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { AuthController } from "./auth.controller";
import { AuthRepository } from "./auth.repository";
import { UserModule } from "../users/users.module";


@Module({
    providers: [AuthService, AuthRepository],
    controllers: [AuthController],
    imports: [UserModule],

})
export class AuthModule {}