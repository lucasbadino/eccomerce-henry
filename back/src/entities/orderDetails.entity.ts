import { Column, Entity, JoinColumn, ManyToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { v4 as uuid } from 'uuid'
import { Products } from "./products.entity";
import { Orders } from "./orders.entity";

@Entity({
    name: 'orderDetails'
})
export class OrderDetails {
    @PrimaryGeneratedColumn('uuid')
    id: string = uuid()
    @Column({
        type: 'decimal',
        precision: 10,
        scale: 2
    })
    price: number;
    @OneToOne(() => Orders,(order)=>order.orderDetail)
    @JoinColumn()
    order: Orders;

    @ManyToMany(() => Products, (product) => product.OrderDetails)
    products: Products[];

}