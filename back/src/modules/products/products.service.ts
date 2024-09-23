import { Injectable } from "@nestjs/common";
import { ProductsRepository } from "./products.repository";
import { Product } from "./productsDto/productsDto";

@Injectable()
export class ProductService {
    
    constructor(private readonly productsRepository: ProductsRepository) { }
    getPruducts(page: number, limit: number) {
        return this.productsRepository.getProducts(page, limit);
    }
    getPruductsById(id: number) {
        return this.productsRepository.getProductsById(id);
    }
    createProduct(product: Omit<Product, "id">) {
        return this.productsRepository.createProduct(product);
    }
    deleteProduct(id: number) {
        return this.productsRepository.deleteProduct(id);
    }
    updateProduct(id: number, product: Omit<Product, "id">) {
        return this.productsRepository.updateProduct(id, product);
    }

}