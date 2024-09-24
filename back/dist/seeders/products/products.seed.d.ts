import { Products } from "src/entities/products.entity";
import { Repository } from "typeorm";
import { Categories } from "src/entities/categories.entity";
export declare class ProductsSeed {
    private productsRepository;
    private categoryRepository;
    constructor(productsRepository: Repository<Products>, categoryRepository: Repository<Categories>);
    findCategory(category: string): Promise<Categories>;
    preloadProducts(): Promise<void>;
}
