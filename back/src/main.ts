import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { loggerGlobal } from './middlewares/logger.middleware';
import { CategorySeed } from './seeders/category/category.seed';
import { ProductsSeed } from './seeders/products/products.seed';
import { BadRequestException, ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(loggerGlobal);
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true,
  }));
  const categorySeed = app.get(CategorySeed);
  categorySeed.preloadCategories();
  console.log("preloaded categories");
  const productsSeed = app.get(ProductsSeed);
  productsSeed.preloadProducts();
  console.log("preloaded products");
  await app.listen(3000);
}
bootstrap();
