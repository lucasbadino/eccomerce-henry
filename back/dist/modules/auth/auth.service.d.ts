import { AuthRepository } from "./auth.repository";
export declare class AuthService {
    private readonly AuthRepository;
    constructor(AuthRepository: AuthRepository);
    getAuth(): string;
    singin({ email, password }: {
        email: any;
        password: any;
    }): boolean | {
        message: string;
        error: any;
    };
}
