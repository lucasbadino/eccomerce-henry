import { ProductsRepository } from "./products.repository";
import { Product } from "./productsDto/productsDto";
export declare class ProductService {
    private readonly productsRepository;
    constructor(productsRepository: ProductsRepository);
    getPruducts(page: number, limit: number): {
        id: number;
        name: string;
        description: string;
        price: number;
        stock: boolean;
        imgUrl: string;
    }[];
    getPruductsById(id: number): {
        id: number;
        name: string;
        description: string;
        price: number;
        stock: boolean;
        imgUrl: string;
    };
    createProduct(product: Omit<Product, "id">): {
        id: number;
        name: string;
        description: string;
        price: number;
        stock: boolean;
        imgUrl: string;
    };
    deleteProduct(id: number): {
        id: number;
        name: string;
        description: string;
        price: number;
        stock: boolean;
        imgUrl: string;
    };
    updateProduct(id: number, product: Omit<Product, "id">): {
        id: number;
        name: string;
        description: string;
        price: number;
        stock: boolean;
        imgUrl: string;
    };
}
