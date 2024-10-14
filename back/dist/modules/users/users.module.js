"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserModule = void 0;
const common_1 = require("@nestjs/common");
const users_service_1 = require("./users.service");
const users_contoller_1 = require("./users.contoller");
const users_repository_1 = require("./users.repository");
const typeorm_1 = require("@nestjs/typeorm");
const users_entity_1 = require("./users.entity");
const express_openid_connect_1 = require("express-openid-connect");
let UserModule = class UserModule {
    configure(consumer) {
        consumer.apply((0, express_openid_connect_1.requiresAuth)()).forRoutes('/users/auth0');
    }
};
exports.UserModule = UserModule;
exports.UserModule = UserModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([users_entity_1.Users]),
        ],
        providers: [users_service_1.UserService, users_repository_1.UsersRepository],
        controllers: [users_contoller_1.UserController],
        exports: [users_service_1.UserService],
    })
], UserModule);
//# sourceMappingURL=users.module.js.map