import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { loggerGlobal } from './middlewares/logger.middleware';
import { CategorySeed } from './seeders/category/category.seed';
import { ProductsSeed } from './seeders/products/products.seed';
import { ValidationPipe } from '@nestjs/common';
import { config as auth0Config } from './config/auth0.config'
import { auth } from 'express-openid-connect';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(loggerGlobal);
  app.use(auth(auth0Config))
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true,
  }));
  const categorySeed = app.get(CategorySeed);
  categorySeed.preloadCategories();
  console.log("preloaded categories");
  const productsSeed = app.get(ProductsSeed);
  productsSeed.preloadProducts();
  console.log("preloaded products");
  const swaggerConfig = new DocumentBuilder()
    .setTitle('New Ecommerce API')
    .addBearerAuth()
    .setDescription('Ecommerce API')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, swaggerConfig);
  SwaggerModule.setup('api', app, document);
  await app.listen(3000);
}
bootstrap();
