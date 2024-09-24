import { Column, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { v4 as uuid } from 'uuid'
import { Users } from "./users.entity";
import { OrderDetails } from "./orderDetails.entity";

@Entity({
    name: 'orders'
})
export class Orders {
    @PrimaryGeneratedColumn('uuid')
    id: string = uuid();
    @ManyToOne(() => Users, (user) => user.orders)
    user: Users;
    @Column({
        type: 'date'
    })
    date: Date;
    @OneToOne(() => OrderDetails,(orderDetail)=>orderDetail.order)
    orderDetail: OrderDetails
}