import { Categories } from "../categories/categories.entity";
import { OrderDetails } from "../ordersDetails/orderDetails.entity";
export declare class Products {
    id: string;
    name: string;
    description: string;
    price: number;
    stock: number;
    imgUrl: string;
    category: Categories;
    OrderDetails: OrderDetails[];
}
