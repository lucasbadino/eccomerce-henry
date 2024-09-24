import { Categories } from "src/entities/categories.entity";
import { Repository } from "typeorm";
export declare class CategorySeed {
    private categoryRepository;
    constructor(categoryRepository: Repository<Categories>);
    preloadCategories(): Promise<void>;
}
