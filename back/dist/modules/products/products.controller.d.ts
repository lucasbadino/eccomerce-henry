import { ProductService } from "./products.service";
export declare class ProductController {
    private readonly productService;
    constructor(productService: ProductService);
    getProducts(): {
        id: number;
        name: string;
        description: string;
        price: number;
        stock: boolean;
        imgUrl: string;
    }[];
}
