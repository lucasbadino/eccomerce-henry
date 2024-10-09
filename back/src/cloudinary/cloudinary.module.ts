import { Module } from '@nestjs/common';
import { CloudinaryController } from './cloudinary.controller';
import { CloudinaryService } from './cloudinary.service';
import { CloudinaryConfig } from 'src/config/cloudinary.config';
import { ProductModule } from 'src/modules/products/products.module';

@Module({
  imports: [ProductModule],
  controllers: [CloudinaryController],
  providers: [CloudinaryService, CloudinaryConfig],
  exports: [CloudinaryService]
})
export class CloudinaryModule { }
