import { OrdersService } from "./order.service";
import { CreateOrderDto } from "./dto/orders.dto";
import { Response } from "express";
export declare class OrdersController {
    private readonly ordersService;
    constructor(ordersService: OrdersService);
    createOrder(CreateOrderDto: CreateOrderDto, res: Response): Promise<void>;
}
