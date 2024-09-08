import { Module } from '@nestjs/common';
import { AuthModule } from './modules/auth/auth.module';
import { UserModule } from './modules/users/users.module';
import { ProductModule } from './modules/products/products.module';


@Module({
  imports: [AuthModule, UserModule, ProductModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
