import { Orders } from "./orders.entity";
import { Repository } from "typeorm";
import { OrderDetails } from "src/modules/ordersDetails/orderDetails.entity";
import { UserService } from "../users/users.service";
import { ProductService } from "../products/products.service";
export declare class OrdersRepository {
    private usersService;
    private ordersRepository;
    private productsService;
    private orderDetailsRepository;
    constructor(usersService: UserService, ordersRepository: Repository<Orders>, productsService: ProductService, orderDetailsRepository: Repository<OrderDetails>);
    addOrder(CreateOrderDto: any): Promise<Orders>;
    getOrder(id: string): Promise<Orders>;
}
