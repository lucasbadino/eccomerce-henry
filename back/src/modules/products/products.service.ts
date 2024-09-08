import { Injectable } from "@nestjs/common";
import { ProductsRepository } from "./products.repository";

@Injectable()
export class ProductService {
    constructor(private readonly productsRepository: ProductsRepository) { }
    getPruducts() {
        return this.productsRepository.getProducts();
    }

}