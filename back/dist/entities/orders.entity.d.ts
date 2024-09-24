import { Users } from "./users.entity";
import { OrderDetails } from "./orderDetails.entity";
export declare class Orders {
    id: string;
    user: Users;
    date: Date;
    orderDetail: OrderDetails;
}
