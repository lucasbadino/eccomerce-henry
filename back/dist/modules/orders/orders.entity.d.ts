import { Users } from "../users/users.entity";
import { OrderDetails } from "../ordersDetails/orderDetails.entity";
export declare class Orders {
    id: string;
    user: Users;
    date: Date;
    orderDetail: OrderDetails;
}
