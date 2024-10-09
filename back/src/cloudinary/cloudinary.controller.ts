import { Controller, FileTypeValidator, HttpException, HttpStatus, Inject, MaxFileSizeValidator, Param, ParseFilePipe, ParseUUIDPipe, Post, Res, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { v2 as cloudinary } from 'cloudinary';
import * as toString from 'buffer-to-stream';
import { CloudinaryService } from './cloudinary.service';
import { Response } from 'express';
import { ProductService } from 'src/modules/products/products.service';

@Controller('files/uploadImage')
export class CloudinaryController {
    constructor(
        private readonly cloudinaryService: CloudinaryService,
        private readonly productService: ProductService
    ) { }

    @Post(':id')
    @UseInterceptors(FileInterceptor('file'))
    async uploadImage(@UploadedFile(
        new ParseFilePipe({
            validators: [
                new MaxFileSizeValidator({
                    maxSize: 200 * 1000,
                    message: 'Archivo demasiado grande'
                }),
                new FileTypeValidator({
                    fileType: /(jpg|jpeg|png|webp)/
                })
            ]
        })
    ) file: Express.Multer.File, @Param('id', ParseUUIDPipe) id: string, @Res() res: Response) {
        try {
            const user = await this.productService.getPruductsById(id);
            if (!user) {
                throw new HttpException('Error al subir el archivo', HttpStatus.NOT_FOUND);
            }
            const result: any = await this.cloudinaryService.uploadFile(file);

            await this.productService.updateImageProduct(id, result.url);
            
            return res.status(200).send({
                uploadStatus: true,
                result
            });
            
            
        } catch (error) {
            throw new HttpException('Error al subir el archivo', HttpStatus.BAD_REQUEST);
        }

    }
}
