import { Products } from "../../modules/products/products.entity";
import { Repository } from "typeorm";
import { Categories } from "../../modules/categories/categories.entity";
export declare class ProductsSeed {
    private productsRepository;
    private categoryRepository;
    constructor(productsRepository: Repository<Products>, categoryRepository: Repository<Categories>);
    findCategory(category: string): Promise<Categories>;
    preloadProducts(): Promise<void>;
}
