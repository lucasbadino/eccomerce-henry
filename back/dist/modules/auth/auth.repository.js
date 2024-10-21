"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthRepository = void 0;
const common_1 = require("@nestjs/common");
const bcrypt = require("bcrypt");
const users_service_1 = require("../users/users.service");
const jwt_1 = require("@nestjs/jwt");
const typeorm_1 = require("@nestjs/typeorm");
const users_entity_1 = require("../users/users.entity");
const typeorm_2 = require("typeorm");
let AuthRepository = class AuthRepository {
    constructor(usersService, jwtService, usersRepository) {
        this.usersService = usersService;
        this.jwtService = jwtService;
        this.usersRepository = usersRepository;
    }
    async singin(LoginUserDto) {
        const { email, password } = LoginUserDto;
        const user = await this.usersService.getUserByEmail(email);
        if (!user) {
            throw new common_1.HttpException('El usuario no existe', common_1.HttpStatus.NOT_FOUND);
        }
        const isValidPassword = await bcrypt.compare(password, user.password);
        if (!isValidPassword) {
            throw new common_1.HttpException('La contraseña es incorrecta', common_1.HttpStatus.NOT_FOUND);
        }
        const userPayload = {
            sub: user.id,
            id: user.id,
            email: user.email,
            role: user.role
        };
        const token = this.jwtService.sign(userPayload);
        return { success: true, token };
    }
    async singup(user) {
        try {
            const hassedPassword = await bcrypt.hash(user.password, 10);
            if (hassedPassword) {
                user.password = hassedPassword;
                delete user.confirmPassword;
                const newUser = await this.usersRepository.create(user);
                if (newUser) {
                    const { password, ...rest } = newUser;
                    return rest;
                }
            }
        }
        catch (error) {
            throw new common_1.HttpException('Error al crear el usuario', common_1.HttpStatus.NOT_FOUND);
        }
    }
};
exports.AuthRepository = AuthRepository;
exports.AuthRepository = AuthRepository = __decorate([
    (0, common_1.Injectable)(),
    __param(2, (0, typeorm_1.InjectRepository)(users_entity_1.Users)),
    __metadata("design:paramtypes", [users_service_1.UserService,
        jwt_1.JwtService,
        typeorm_2.Repository])
], AuthRepository);
//# sourceMappingURL=auth.repository.js.map