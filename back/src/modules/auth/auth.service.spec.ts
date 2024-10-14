import { Test } from "@nestjs/testing";
import { AuthRepository } from "./auth.repository";
import { AuthService } from "./auth.service";
import { LoginUserDto, singupDto } from "./authDto/authDto";
import { JwtService } from "@nestjs/jwt";
import { UserService } from "../users/users.service";
import { HttpException } from "@nestjs/common";


describe('AuthService', () => {
    let authService: AuthService;
    let authRepository: AuthRepository;
    let userService: UserService;

    const mockUser: singupDto = {
        name: 'test',
        email: 'test@test.com',
        phone: 123456789,
        country: 'test',
        address: 'test',
        password: 'Test1234_',
        confirmPassword: 'Test1234_',
        city: 'test',
    };

    const mockLoginUser: LoginUserDto = {
        email: 'test@test.com',
        password: 'Test1234_',
    };

    const mockUserService = {
        getUserByEmail: jest.fn().mockResolvedValue(mockUser),
        CreateUser: jest.fn().mockResolvedValue({ id: '123', name: 'test', email: 'test@test.com', role: 'user' }),
    };

    const mockAuthRepository = {
        singin: jest.fn().mockResolvedValue({ success: true, token: 'mockToken' }),
        singup: jest.fn().mockResolvedValue(mockUserService.CreateUser()),
    };

    beforeEach(async () => {
        const module = await Test.createTestingModule({
            providers: [
                AuthService,
                AuthRepository,
                JwtService,
                {
                    provide: UserService,
                    useValue: mockUserService,
                },
            ],
        }).compile();

        authService = module.get<AuthService>(AuthService);
        authRepository = module.get<AuthRepository>(AuthRepository);
        userService = module.get<UserService>(UserService);
    });

    it('should be defined', () => {
        expect(authService).toBeDefined();
    });

    it('singup() should create a user', async () => {
        const result = await authService.singup(mockUser);
        expect(result).toBeDefined();
        expect(userService.CreateUser).toHaveBeenCalledWith(mockUser);
    });

    it('singup() should throw an error if password does not match', async () => {
        const invalidUser = { ...mockUser, password: 'DifferentPassword' };
        await expect(authService.singup(invalidUser)).rejects.toThrow(HttpException);
    });

    it('singin() should return a token for valid credentials', async () => {
        const result = await authService.singin(mockLoginUser);
        expect(result).toEqual({ success: true, token: 'mockToken' });
        expect(authRepository.singin).toHaveBeenCalledWith(mockLoginUser);
    });
});