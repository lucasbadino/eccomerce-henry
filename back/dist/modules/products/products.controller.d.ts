import { ProductService } from "./products.service";
import { Response } from "express";
import { CreateProductDto, UpdateProductDto } from "./productsDto/productsDto";
export declare class ProductController {
    private readonly productService;
    constructor(productService: ProductService);
    getProducts(res?: Response): Promise<import("./products.entity").Products[] | Response<any, Record<string, any>>>;
    getProductsById(id: string, res?: Response): Promise<import("./products.entity").Products | Response<any, Record<string, any>>>;
    createProduct(CreateProductDto: CreateProductDto, res: Response): Promise<Response<any, Record<string, any>>>;
    updateProduct(id: string, UpdateProductDto: UpdateProductDto, res: Response): Promise<Response<any, Record<string, any>>>;
    deleteProduct(id: string, res?: Response): Promise<import("./products.entity").Products | Response<any, Record<string, any>>>;
}
