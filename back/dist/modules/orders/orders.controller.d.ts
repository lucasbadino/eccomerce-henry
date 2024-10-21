import { OrdersService } from "./order.service";
import { CreateOrderDto } from "./dto/orders.dto";
import { Response } from "express";
export declare class OrdersController {
    private readonly ordersService;
    constructor(ordersService: OrdersService);
    getOrders(res: Response): Promise<void>;
    getOrder(id: string, res: Response): Promise<void>;
    createOrder(CreateOrderDto: CreateOrderDto, res: Response): Promise<void>;
}
