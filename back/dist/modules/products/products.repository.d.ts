import { Products } from "./products.entity";
import { CreateProductDto, UpdateProductDto } from "./productsDto/productsDto";
export declare class ProductsRepository {
    private productsRepository;
    getProducts(page: number, limit: number): Promise<Products[]>;
    getProductsById(id: string): Promise<Products>;
    createProduct(product: CreateProductDto): Promise<Products>;
    updateProduct(id: string, UpdateProductDto: UpdateProductDto): Promise<import("typeorm").UpdateResult>;
    deleteProduct(id: string): Promise<Products>;
    buyProduct(products: any): Promise<{
        totalPrice: number;
        products: any;
    }>;
}
