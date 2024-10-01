import { Module } from '@nestjs/common';
import { AuthModule } from './modules/auth/auth.module';
import { UserModule } from './modules/users/users.module';
import { ProductModule } from './modules/products/products.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { postgresConfig } from './config/data-source'
import { SeedsModule } from './seeders/seeds.module';
import { OrdersModule } from './modules/orders/orders.module';


@Module({
  imports: [
    AuthModule,
    OrdersModule,
    UserModule,
    ProductModule,
    SeedsModule,
    ConfigModule.forRoot({
      isGlobal: true,
      load: [postgresConfig],
    }),
    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => configService.get('typeorm')
    }),

  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
