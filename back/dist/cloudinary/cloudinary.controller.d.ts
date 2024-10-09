import { CloudinaryService } from './cloudinary.service';
import { Response } from 'express';
import { ProductService } from 'src/modules/products/products.service';
export declare class CloudinaryController {
    private readonly cloudinaryService;
    private readonly productService;
    constructor(cloudinaryService: CloudinaryService, productService: ProductService);
    uploadImage(file: Express.Multer.File, id: string, res: Response): Promise<Response<any, Record<string, any>>>;
}
