import { AuthService } from "../../modules/auth/auth.service";
import { Users } from "../../modules/users/users.entity";
import { Repository } from "typeorm";
export declare class UsersSeed {
    private readonly usersRepository;
    private readonly authService;
    constructor(usersRepository: Repository<Users>, authService: AuthService);
    preloadUsers(): Promise<void>;
}
