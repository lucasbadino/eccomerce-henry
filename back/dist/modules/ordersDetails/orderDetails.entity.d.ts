import { Products } from "../products/products.entity";
import { Orders } from "../orders/orders.entity";
export declare class OrderDetails {
    id: string;
    price: number;
    order: Orders;
    products: Products[];
}
