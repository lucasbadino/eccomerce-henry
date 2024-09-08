import { ProductsRepository } from "./products.repository";
export declare class ProductService {
    private readonly productsRepository;
    constructor(productsRepository: ProductsRepository);
    getPruducts(): {
        id: number;
        name: string;
        description: string;
        price: number;
        stock: boolean;
        imgUrl: string;
    }[];
}
