"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const logger_middleware_1 = require("./middlewares/logger.middleware");
const category_seed_1 = require("./seeders/category/category.seed");
const products_seed_1 = require("./seeders/products/products.seed");
const common_1 = require("@nestjs/common");
const auth0_config_1 = require("./config/auth0.config");
const express_openid_connect_1 = require("express-openid-connect");
const swagger_1 = require("@nestjs/swagger");
const users_seed_1 = require("./seeders/users/users.seed");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.useGlobalPipes(new common_1.ValidationPipe({
        whitelist: true,
        exceptionFactory: (errors) => {
            const cleanErrors = errors.map((e) => {
                return {
                    property: e.property,
                    constraints: e.constraints,
                };
            });
            return new common_1.BadRequestException({
                alert: 'Se han encontrado los siguientes errores : ',
                errors: cleanErrors
            });
        }
    }));
    app.use(logger_middleware_1.loggerGlobal);
    app.use((0, express_openid_connect_1.auth)(auth0_config_1.config));
    app.useGlobalPipes(new common_1.ValidationPipe({
        whitelist: true,
    }));
    const categorySeed = app.get(category_seed_1.CategorySeed);
    categorySeed.preloadCategories();
    console.log("preloaded categories");
    const productsSeed = app.get(products_seed_1.ProductsSeed);
    productsSeed.preloadProducts();
    console.log("preloaded products");
    const usersSeed = app.get(users_seed_1.UsersSeed);
    await usersSeed.preloadUsers();
    console.log("preloaded users");
    const swaggerConfig = new swagger_1.DocumentBuilder()
        .setTitle('New Ecommerce API')
        .addBearerAuth()
        .setDescription('Ecommerce API')
        .setVersion('1.0')
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, swaggerConfig);
    swagger_1.SwaggerModule.setup('api', app, document);
    await app.listen(3000 | 3002);
}
bootstrap();
//# sourceMappingURL=main.js.map