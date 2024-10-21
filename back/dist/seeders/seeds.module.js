"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SeedsModule = void 0;
const common_1 = require("@nestjs/common");
const category_seed_1 = require("./category/category.seed");
const products_seed_1 = require("./products/products.seed");
const typeorm_1 = require("@nestjs/typeorm");
const categories_entity_1 = require("../modules/categories/categories.entity");
const products_entity_1 = require("../modules/products/products.entity");
const users_seed_1 = require("./users/users.seed");
const users_entity_1 = require("../modules/users/users.entity");
const auth_service_1 = require("../modules/auth/auth.service");
const auth_repository_1 = require("../modules/auth/auth.repository");
const users_service_1 = require("../modules/users/users.service");
const users_repository_1 = require("../modules/users/users.repository");
let SeedsModule = class SeedsModule {
};
exports.SeedsModule = SeedsModule;
exports.SeedsModule = SeedsModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([categories_entity_1.Categories, products_entity_1.Products, users_entity_1.Users]),
        ],
        providers: [category_seed_1.CategorySeed, products_seed_1.ProductsSeed, users_seed_1.UsersSeed, auth_service_1.AuthService, auth_repository_1.AuthRepository, users_service_1.UserService, users_repository_1.UsersRepository],
        exports: [category_seed_1.CategorySeed, products_seed_1.ProductsSeed, users_seed_1.UsersSeed]
    })
], SeedsModule);
//# sourceMappingURL=seeds.module.js.map