import { ProductsRepository } from "./products.repository";
import { Products } from "./products.entity";
import { CreateProductDto, UpdateProductDto } from "./productsDto/productsDto";
export declare class ProductService {
    private readonly productsRepository;
    constructor(productsRepository: ProductsRepository);
    getProducts(): Promise<Products[]>;
    getPruductsById(id: string): Promise<Products>;
    createProduct(product: CreateProductDto): Promise<Products>;
    deleteProduct(id: string): Promise<Products>;
    updateProduct(id: string, UpdateProductDto: UpdateProductDto): Promise<import("typeorm").UpdateResult>;
    updateImageProduct(id: string, url: any): Promise<import("typeorm").UpdateResult>;
}
