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
exports.UsersSeed = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const auth_service_1 = require("../../modules/auth/auth.service");
const roles_auth_1 = require("../../modules/auth/authRoles/roles.auth");
const users_entity_1 = require("../../modules/users/users.entity");
const typeorm_2 = require("typeorm");
let UsersSeed = class UsersSeed {
    constructor(usersRepository, authService) {
        this.usersRepository = usersRepository;
        this.authService = authService;
    }
    async preloadUsers() {
        const response = await fetch('https://jsonplaceholder.typicode.com/users?_limit=2');
        const users = await response.json();
        const promises = users.map(async (user) => {
            const existingUser = await this.usersRepository.findOne({ where: { email: user.email } });
            if (!existingUser) {
                const newUser = this.authService.singup({
                    name: user.name,
                    email: user.email,
                    password: user.name + "A123_",
                    confirmPassword: user.name + "A123_",
                    address: user.address.street,
                    phone: user.phone.replace(/\D/g, '').substring(0, 10),
                    country: "Argentina",
                    city: user.address.city,
                    role: roles_auth_1.Role.Admin
                });
            }
        });
        await Promise.all(promises);
    }
};
exports.UsersSeed = UsersSeed;
exports.UsersSeed = UsersSeed = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(users_entity_1.Users)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        auth_service_1.AuthService])
], UsersSeed);
//# sourceMappingURL=users.seed.js.map