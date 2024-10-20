import { Orders } from "./orders.entity";
import { Repository } from "typeorm";
import { Users } from "../users/users.entity";
import { Products } from "../products/products.entity";
import { OrderDetails } from "src/modules/ordersDetails/orderDetails.entity";
export declare class OrdersRepository {
    private usersRepository;
    private ordersRepository;
    private productsRepository;
    private orderDetailsRepository;
    constructor(usersRepository: Repository<Users>, ordersRepository: Repository<Orders>, productsRepository: Repository<Products>, orderDetailsRepository: Repository<OrderDetails>);
    addOrder(CreateOrderDto: any): Promise<Orders>;
    getOrder(id: string): Promise<any>;
    buyProduct(products: any): Promise<{
        totalPrice: number;
        products: any;
    }>;
}
