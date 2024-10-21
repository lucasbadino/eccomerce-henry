import { ProductService } from '../../modules/products/products.service';
export declare class CloudinaryService {
    private readonly productsService;
    constructor(productsService: ProductService);
    uploadFile(file: Express.Multer.File): Promise<unknown>;
}
