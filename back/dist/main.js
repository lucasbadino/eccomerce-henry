"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const logger_middleware_1 = require("./middlewares/logger.middleware");
const category_seed_1 = require("./seeders/category/category.seed");
const products_seed_1 = require("./seeders/products/products.seed");
const common_1 = require("@nestjs/common");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.use(logger_middleware_1.loggerGlobal);
    app.useGlobalPipes(new common_1.ValidationPipe({
        whitelist: true,
    }));
    const categorySeed = app.get(category_seed_1.CategorySeed);
    categorySeed.preloadCategories();
    console.log("preloaded categories");
    const productsSeed = app.get(products_seed_1.ProductsSeed);
    productsSeed.preloadProducts();
    console.log("preloaded products");
    await app.listen(3000);
}
bootstrap();
//# sourceMappingURL=main.js.map