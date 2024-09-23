import { Product } from "./productsDto/productsDto";
export declare class ProductsRepository {
    private products;
    getProducts(page: number, limit: number): {
        id: number;
        name: string;
        description: string;
        price: number;
        stock: boolean;
        imgUrl: string;
    }[];
    getProductsById(id: number): {
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
    updateProduct(id: number, product: Omit<Product, "id">): {
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
}
