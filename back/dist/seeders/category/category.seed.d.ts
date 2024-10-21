import { Categories } from "../../modules/categories/categories.entity";
import { Repository } from "typeorm";
export declare class CategorySeed {
    private categoryRepository;
    constructor(categoryRepository: Repository<Categories>);
    preloadCategories(): Promise<void>;
}
