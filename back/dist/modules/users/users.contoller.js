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
exports.UserController = void 0;
const common_1 = require("@nestjs/common");
const users_service_1 = require("./users.service");
const usersDto_1 = require("./usersDto/usersDto");
const auth_guard_1 = require("../auth/authGuard/auth.guard");
const swagger_1 = require("@nestjs/swagger");
const role_guard_1 = require("../auth/authGuard/role.guard");
const roles_decorator_1 = require("../auth/authRoles/roles.decorator");
const roles_auth_1 = require("../auth/authRoles/roles.auth");
let UserController = class UserController {
    constructor(userService) {
        this.userService = userService;
    }
    async getUsers() {
        try {
            return await this.userService.getUsers();
        }
        catch (error) {
            throw new common_1.HttpException('Error al obtener los usuarios', common_1.HttpStatus.BAD_REQUEST);
        }
    }
    async getUserById(id, res) {
        try {
            const user = await this.userService.getUserById(id);
            return res.status(200).send(user);
        }
        catch (error) {
            throw new common_1.HttpException('Error al obtener el usuario', common_1.HttpStatus.NOT_FOUND);
        }
    }
    async createUser(res, CreateUserDto) {
        try {
            const { id } = await this.userService.CreateUser(CreateUserDto);
            return res.status(201).json(`Usuario creado con exito con el id: ${id}`);
        }
        catch (error) {
            throw new common_1.HttpException('Error al crear el usuario', common_1.HttpStatus.BAD_REQUEST);
        }
    }
    async updateUser(idNumber, UpdateUserData, res) {
        try {
            const user = await this.userService.getUserById(idNumber);
        }
        catch (error) {
            throw new common_1.HttpException('Usuario no encontrado', common_1.HttpStatus.NOT_FOUND);
        }
        try {
            const updatedUser = await this.userService.updateUser(idNumber, UpdateUserData);
            return res.status(201).json(`Usuario actualizado con exito: ${updatedUser.id}`);
        }
        catch (error) {
            throw new common_1.HttpException('Error al actualizar el usuario', common_1.HttpStatus.BAD_REQUEST);
        }
    }
    async deleteUser(idNumber, res) {
        try {
            const deletedUser = await this.userService.deleteUser(idNumber);
            const { id } = deletedUser;
            return res.status(200).json(`Usuario eliminado con exito: ${id}`);
        }
        catch (error) {
            throw new common_1.HttpException('Error al eliminar el usuario', common_1.HttpStatus.NOT_FOUND);
        }
    }
};
exports.UserController = UserController;
__decorate([
    (0, roles_decorator_1.Roles)(roles_auth_1.Role.Admin),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard, role_guard_1.RoleGuard),
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Obtener todos los usuarios' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Usuarios obtenidos con exito' }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Error al obtener los usuarios' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], UserController.prototype, "getUsers", null);
__decorate([
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.Get)(":id"),
    (0, swagger_1.ApiOperation)({ summary: 'Obtener un usuario por id' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Usuario obtenido con exito' }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Error al obtener el usuario' }),
    __param(0, (0, common_1.Param)("id")),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "getUserById", null);
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Crear un usuario' }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'Usuario creado con exito' }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Error al crear el usuario' }),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, usersDto_1.CreateUserDto]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "createUser", null);
__decorate([
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    (0, common_1.Put)(":id"),
    (0, swagger_1.ApiOperation)({ summary: 'Actualizar un usuario por id' }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'Usuario actualizado con exito' }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Error al actualizar el usuario' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Usuario no encontrado' }),
    __param(0, (0, common_1.Param)("id", common_1.ParseUUIDPipe)),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, usersDto_1.UpdateUserData, Object]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "updateUser", null);
__decorate([
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    (0, common_1.Delete)(":id"),
    (0, swagger_1.ApiOperation)({ summary: 'Eliminar un usuario por id' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Usuario eliminado con exito' }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Error al eliminar el usuario' }),
    __param(0, (0, common_1.Param)("id", common_1.ParseUUIDPipe)),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "deleteUser", null);
exports.UserController = UserController = __decorate([
    (0, swagger_1.ApiTags)('Users'),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.Controller)("users"),
    __metadata("design:paramtypes", [users_service_1.UserService])
], UserController);
//# sourceMappingURL=users.contoller.js.map