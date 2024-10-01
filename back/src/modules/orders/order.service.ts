import { Injectable } from "@nestjs/common";
import { OrdersRepository } from "./orders.repository";
import { CreateOrderDto } from "./dto/orders.dto";

@Injectable()
export class OrdersService {
    constructor(private ordersRepository: OrdersRepository) { }
    createOrderService(CreateOrderDto: CreateOrderDto) {
        try {
            return this.ordersRepository.addOrder(CreateOrderDto);
        } catch (error) {
            throw `error al crear la orden: ${error}`;
        }
    }
}