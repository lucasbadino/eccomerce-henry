import { Injectable } from "@nestjs/common";

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

    getProducts() {
        return this.products;
    }
}