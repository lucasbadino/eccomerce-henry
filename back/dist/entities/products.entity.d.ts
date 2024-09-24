import { Categories } from "./categories.entity";
import { OrderDetails } from "./orderDetails.entity";
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
