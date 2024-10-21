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
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersRepository = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const users_entity_1 = require("./users.entity");
const typeorm_2 = require("typeorm");
let UsersRepository = class UsersRepository {
    async getUsers() {
        const users = await this.usersRepository.find({
            select: ["id", "email", "name", "address", "phone", "country", "city"],
            relations: { orders: true, },
            order: { id: "ASC" }
        });
        return users;
    }
    async getUserById(id) {
        const user = await this.usersRepository.findOne({ where: { id } });
        if (!user) {
            throw new common_1.NotFoundException("User not found");
        }
        const { password, ...rest } = user;
        return rest;
    }
    async getUserByEmail(email) {
        const user = await this.usersRepository.findOne({ where: { email } });
        return user;
    }
    async createUser(user) {
        const newUser = await this.usersRepository.create(user);
        await this.usersRepository.save(newUser);
        return newUser;
    }
    async uptadeUser(id, user) {
        const updatedUser = await this.getUserById(id);
        if (!updatedUser) {
            throw new common_1.HttpException("User not found", common_1.HttpStatus.NOT_FOUND);
        }
        if (updatedUser) {
            await this.usersRepository.update(id, user);
            return updatedUser;
        }
        throw new Error("User not found");
    }
    async deleteUser(id) {
        const deletedUser = await this.getUserById(id);
        if (!deletedUser) {
            throw new common_1.HttpException("User not found", common_1.HttpStatus.NOT_FOUND);
        }
        await this.usersRepository.delete(id);
        return deletedUser;
    }
};
exports.UsersRepository = UsersRepository;
__decorate([
    (0, typeorm_1.InjectRepository)(users_entity_1.Users),
    __metadata("design:type", typeorm_2.Repository)
], UsersRepository.prototype, "usersRepository", void 0);
exports.UsersRepository = UsersRepository = __decorate([
    (0, common_1.Injectable)()
], UsersRepository);
//# sourceMappingURL=users.repository.js.map