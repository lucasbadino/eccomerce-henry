import { OrdersRepository } from "./orders.repository";
import { CreateOrderDto } from "./dto/orders.dto";
export declare class OrdersService {
    private ordersRepository;
    constructor(ordersRepository: OrdersRepository);
    getOrders(): Promise<import("./orders.entity").Orders[]>;
    getOrder(id: string): Promise<any>;
    createOrderService(CreateOrderDto: CreateOrderDto): Promise<import("./orders.entity").Orders>;
}
