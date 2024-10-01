import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Products } from "./products.entity";
import { Repository } from "typeorm";
import { CreateProductDto, UpdateProductDto } from "./productsDto/productsDto";

@Injectable()
export class ProductsRepository {
    @InjectRepository(Products)
    private productsRepository: Repository<Products>;

    async getProducts(page: number, limit: number) {
        const products = await this.productsRepository.find();
        return products;

    }

    async getProductsById(id: string) {
        const product = await this.productsRepository.findOneBy({ id })
        return product;
    }
    async createProduct(product: CreateProductDto) {
        const prod = await this.productsRepository.create(product)
        await this.productsRepository.save(prod);
        return prod;

    }
    async updateProduct(id: string, UpdateProductDto: UpdateProductDto) {
        const updatedProduct = await this.productsRepository.update({ id }, UpdateProductDto)
        return updatedProduct;
    }
    async deleteProduct(id: string) {
        const dataToDelete = await this.productsRepository.findOneBy({ id })
        await this.productsRepository.delete({ id })
        return dataToDelete;


    }
    async buyProduct(products) {
        try {
            let totalPrice = 0;
            for (const prod of products) {
                const product = await this.getProductsById(prod.id);
                if (!product) {
                    throw Error('Product not found');
                }
                if (product.stock > 0) {
                    totalPrice += product.price;
                    product.stock -= 1;
                    await this.productsRepository.save(product);
                }
            }
            return {totalPrice, products}
        } catch (error) {

        }
    }

}