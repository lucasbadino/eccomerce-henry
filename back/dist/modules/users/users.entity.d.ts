import { Orders } from '../orders/orders.entity';
import { Role } from '../auth/authRoles/roles.auth';
export declare class Users {
    id: string;
    name: string;
    email: string;
    password: string;
    phone: number;
    country: string;
    address: string;
    city: string;
    role: Role;
    orders: Orders[];
}
