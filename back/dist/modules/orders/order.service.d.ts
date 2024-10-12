import { OrdersRepository } from "./orders.repository";
import { CreateOrderDto } from "./dto/orders.dto";
export declare class OrdersService {
    private ordersRepository;
    constructor(ordersRepository: OrdersRepository);
    getOrder(id: string): Promise<import("./orders.entity").Orders>;
    createOrderService(CreateOrderDto: CreateOrderDto): Promise<import("./orders.entity").Orders>;
}
