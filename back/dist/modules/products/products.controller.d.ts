import { ProductService } from "./products.service";
import { CreateProductDto } from "./productsDto/productsDto";
import { Response } from "express";
export declare class ProductController {
    private readonly productService;
    constructor(productService: ProductService);
    getProducts(res: Response, limit?: number, page?: number): Response<any, Record<string, any>>;
    getProductsById(id: number, res: Response): Response<any, Record<string, any>>;
    createProduct(CreateProductDto: CreateProductDto, res: Response): Response<any, Record<string, any>>;
    updateProduct(id: number, CreateProductDto: CreateProductDto, res: Response): Response<any, Record<string, any>>;
    deleteProduct(id: number, res: Response): Response<any, Record<string, any>>;
}
