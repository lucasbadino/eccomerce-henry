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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductsRepository = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const products_entity_1 = require("./products.entity");
const typeorm_2 = require("typeorm");
let ProductsRepository = class ProductsRepository {
    async getProducts(page, limit) {
        const products = await this.productsRepository.find();
        return products;
    }
    async getProductsById(id) {
        const product = await this.productsRepository.findOneBy({ id });
        return product;
    }
    async createProduct(product) {
        const prod = await this.productsRepository.create(product);
        await this.productsRepository.save(prod);
        return prod;
    }
    async updateProduct(id, UpdateProductDto) {
        const updatedProduct = await this.productsRepository.update({ id }, UpdateProductDto);
        return updatedProduct;
    }
    async deleteProduct(id) {
        const dataToDelete = await this.productsRepository.findOneBy({ id });
        await this.productsRepository.delete({ id });
        return dataToDelete;
    }
    async updateImageProduct(id, url) {
        try {
            return await this.productsRepository.update({ id }, { imgUrl: url });
        }
        catch (error) {
            throw new Error(error);
        }
    }
};
exports.ProductsRepository = ProductsRepository;
__decorate([
    (0, typeorm_1.InjectRepository)(products_entity_1.Products),
    __metadata("design:type", typeorm_2.Repository)
], ProductsRepository.prototype, "productsRepository", void 0);
exports.ProductsRepository = ProductsRepository = __decorate([
    (0, common_1.Injectable)()
], ProductsRepository);
//# sourceMappingURL=products.repository.js.map