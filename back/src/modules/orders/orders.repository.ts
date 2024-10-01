import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Orders } from "./orders.entity";
import { Repository } from "typeorm";
import { Users } from "../users/users.entity";
import { Products } from "../products/products.entity";
import { OrderDetails } from "src/modules/ordersDetails/orderDetails.entity";
import { UserService } from "../users/users.service";
import { ProductService } from "../products/products.service";


@Injectable()
export class OrdersRepository {
    constructor(
        @InjectRepository(Users)
        private usersService: UserService,
        @InjectRepository(Orders)
        private ordersRepository: Repository<Orders>,
        @InjectRepository(Products)
        private productsService: ProductService,
        @InjectRepository(OrderDetails)
        private orderDetailsRepository: Repository<OrderDetails>
    ) { }
    async addOrder(CreateOrderDto): Promise<Orders> {
        try {
            const { userId, products } = CreateOrderDto
            const user = await this.usersService.getUserById(userId)
            const order = await this.ordersRepository.create({
                user,
                date: new Date()
            })
            const { totalPrice } = await this.productsService.buyProduct(products)
            const orderDetail = await this.orderDetailsRepository.create({
                price: totalPrice,
                products,
            });
            await this.orderDetailsRepository.save(orderDetail);
            order.orderDetail = orderDetail;
            await this.ordersRepository.save(order);
            return order
        }
        catch (error) {
            throw Error(`Error al crear la orden: ${error}`);

        }
    }
    async getOrder(id: string): Promise<Orders> {
        const order = await this.ordersRepository.findOneBy({
            id,
            orderDetail: {
                products: true
            }
        });
        if (!order) {
            throw Error('Order not found');
        }
        return order
    }

}
