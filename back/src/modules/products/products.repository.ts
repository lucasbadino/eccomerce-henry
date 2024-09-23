import { Injectable } from "@nestjs/common";
import { Product } from "./productsDto/productsDto";

@Injectable()
export class ProductsRepository {

    private products = [
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
    ]

    getProducts(page: number, limit: number) {
        return this.products.slice((page - 1) * limit, page * limit);
    }

    getProductsById(id: number) {
        const product = this.products.find(
            (prod) => prod.id == id
        )
        return product;
    }
    createProduct(product: Omit<Product, "id">) {
        const id = this.products.length + 1
        this.products = [...this.products, {id, ...product}];        
        const newProduct = this.products.find(prod => prod.id == id);
        return newProduct;
    }
    updateProduct(id: number, product: Omit<Product, "id">) {
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
        console.log(updatedProduct);
        return updatedProduct;
    }
    deleteProduct(id: number) {
        const deletedProduct = this.products.find(prod => prod.id == id);
        this.products = this.products.filter((e) => e.id != id)
        return deletedProduct;

    }
}