"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const auth_module_1 = require("./modules/auth/auth.module");
const users_module_1 = require("./modules/users/users.module");
const products_module_1 = require("./modules/products/products.module");
const typeorm_1 = require("@nestjs/typeorm");
const config_1 = require("@nestjs/config");
const data_source_1 = require("./config/data-source");
const seeds_module_1 = require("./seeders/seeds.module");
const orders_module_1 = require("./modules/orders/orders.module");
const cloudinary_module_1 = require("./cloudinary/cloudinary.module");
const jwt_1 = require("@nestjs/jwt");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            auth_module_1.AuthModule,
            orders_module_1.OrdersModule,
            users_module_1.UserModule,
            products_module_1.ProductModule,
            seeds_module_1.SeedsModule,
            jwt_1.JwtModule.register({
                secret: process.env.JWT_SECRET,
                signOptions: { expiresIn: '1h' },
                global: true
            }),
            config_1.ConfigModule.forRoot({
                isGlobal: true,
                load: [data_source_1.postgresConfig],
            }),
            typeorm_1.TypeOrmModule.forRootAsync({
                inject: [config_1.ConfigService],
                useFactory: (configService) => configService.get('typeorm')
            }),
            cloudinary_module_1.CloudinaryModule,
        ],
        controllers: [],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map