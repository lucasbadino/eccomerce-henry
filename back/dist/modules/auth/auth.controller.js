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
exports.AuthController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const auth_service_1 = require("./auth.service");
const authDto_1 = require("./authDto/authDto");
const users_service_1 = require("../users/users.service");
const swagger_1 = require("@nestjs/swagger");
let AuthController = class AuthController {
    constructor(authService, usersService) {
        this.authService = authService;
        this.usersService = usersService;
    }
    async singup(res, user) {
        const email = await this.usersService.getUserByEmail(user.email);
        if (email) {
            throw new common_1.HttpException('El email ya existe', common_1.HttpStatus.CONFLICT);
        }
        if (user.password !== user.confirmPassword) {
            throw new common_1.HttpException('Las contraseñas no coinciden', common_1.HttpStatus.BAD_REQUEST);
        }
        try {
            const validate = await this.authService.singup(user);
            return res.status(201).json(validate);
        }
        catch (error) {
            throw new common_1.HttpException('Error al crear el usuario', common_1.HttpStatus.NOT_FOUND);
        }
    }
    async singin(LoginUserDto, res) {
        try {
            const success = await this.authService.singin(LoginUserDto);
            return res.status(201).json(success);
        }
        catch (error) {
            throw new common_1.HttpException('Usuario o contraseña incorrecta', common_1.HttpStatus.BAD_REQUEST);
        }
    }
};
exports.AuthController = AuthController;
__decorate([
    (0, common_1.Post)('signup'),
    (0, swagger_1.ApiOperation)({ summary: 'Crear un usuario' }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'usuario creado' }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Las contraseñas no coinciden' }),
    (0, swagger_1.ApiResponse)({ status: 409, description: 'El email ya existe' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Error al crear el usuario' }),
    openapi.ApiResponse({ status: 201 }),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, authDto_1.singupDto]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "singup", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Iniciar sesion' }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'Sesion iniciada' }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Usuario o contraseña incorrecta' }),
    (0, common_1.Post)("signin"),
    openapi.ApiResponse({ status: 201 }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [authDto_1.LoginUserDto, Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "singin", null);
exports.AuthController = AuthController = __decorate([
    (0, swagger_1.ApiTags)('auth'),
    (0, common_1.Controller)("auth"),
    __metadata("design:paramtypes", [auth_service_1.AuthService,
        users_service_1.UserService])
], AuthController);
//# sourceMappingURL=auth.controller.js.map