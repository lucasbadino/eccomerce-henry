"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductsSeed = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const products_entity_1 = require("../../entities/products.entity");
const typeorm_2 = require("typeorm");
const data_1 = require("../data");
const categories_entity_1 = require("../../entities/categories.entity");
let ProductsSeed = class ProductsSeed {
    constructor(productsRepository, categoryRepository) {
        this.productsRepository = productsRepository;
        this.categoryRepository = categoryRepository;
    }
    async findCategory(category) {
        const categoryEntity = await this.categoryRepository.findOne({
            where: {
                name: category
            }
        });
        if (!categoryEntity) {
            const categoryEntity = new categories_entity_1.Categories();
            categoryEntity.name = category;
            await this.categoryRepository.save(categoryEntity);
            return categoryEntity;
        }
        return categoryEntity;
    }
    async preloadProducts() {
        const existsProducts = await this.productsRepository.find({
            where: {
                name: (0, typeorm_2.In)(data_1.data.map(product => product.name))
            }
        });
        const products = data_1.data.map(async (product) => {
            const existProduct = existsProducts.find(e => e.name == product.name);
            if (!existProduct) {
                const productEntity = this.productsRepository.create({
                    name: product.name,
                    description: product.description,
                    price: product.price,
                    stock: product.stock,
                });
                productEntity.category = await this.findCategory(product.category);
                this.productsRepository.save(productEntity);
            }
        });
    }
};
exports.ProductsSeed = ProductsSeed;
exports.ProductsSeed = ProductsSeed = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(products_entity_1.Products)),
    __param(1, (0, typeorm_1.InjectRepository)(categories_entity_1.Categories)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository])
], ProductsSeed);
//# sourceMappingURL=products.seed.js.map