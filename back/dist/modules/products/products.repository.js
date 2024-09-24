"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductsRepository = void 0;
const common_1 = require("@nestjs/common");
let ProductsRepository = class ProductsRepository {
    constructor() {
        this.products = [
            {
                id: 1,
                name: "Product 1",
                description: "Description 1",
                price: 100,
                stock: true,
                imgUrl: "https://via.placeholder.com/150"
            },
            {
                id: 2,
                name: "Product 2",
                description: "Description 2",
                price: 200,
                stock: false,
                imgUrl: "https://via.placeholder.com/150"
            },
            {
                id: 3,
                name: "Product 3",
                description: "Description 3",
                price: 300,
                stock: true,
                imgUrl: "https://via.placeholder.com/150"
            }
        ];
    }
    getProducts(page, limit) {
        return this.products.slice((page - 1) * limit, page * limit);
    }
    getProductsById(id) {
        const product = this.products.find((prod) => prod.id == id);
        return product;
    }
    createProduct(product) {
        const id = this.products.length + 1;
        this.products = [...this.products, { id, ...product }];
        const newProduct = this.products.find(prod => prod.id == id);
        return newProduct;
    }
    updateProduct(id, product) {
        this.products = this.products.map((e) => {
            if (e.id == id) {
                return {
                    ...e,
                    ...product
                };
            }
            return e;
        });
        const updatedProduct = this.products.find(prod => prod.id == id);
        return updatedProduct;
    }
    deleteProduct(id) {
        const deletedProduct = this.products.find(prod => prod.id == id);
        this.products = this.products.filter((e) => e.id != id);
        return deletedProduct;
    }
};
exports.ProductsRepository = ProductsRepository;
exports.ProductsRepository = ProductsRepository = __decorate([
    (0, common_1.Injectable)()
], ProductsRepository);
//# sourceMappingURL=products.repository.js.map