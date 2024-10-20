import { Users } from "src/modules/users/users.entity";
import { Repository } from "typeorm";
export declare class UsersSeed {
    private readonly usersRepository;
    constructor(usersRepository: Repository<Users>);
    preloadUsers(): Promise<void>;
}
