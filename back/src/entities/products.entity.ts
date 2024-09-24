import { Column, Entity, JoinTable, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { v4 as uuid } from 'uuid'
import { Categories } from "./categories.entity";
import { OrderDetails } from "./orderDetails.entity";

@Entity({
    name: 'products'
})
export class Products {
    @PrimaryGeneratedColumn('uuid')
    id: string = uuid()
    @Column({
        length: 50
    })
    name: string
    @Column()
    description: string
    @Column({
        type: 'decimal',
        precision: 10,
        scale: 2,
    })
    price: number
    @Column()
    stock: number

    @Column({
        default: 'https://via.placeholder.com/300',
        nullable: true
    })
    imgUrl: string
    @ManyToOne(() => Categories, (category) => category.products)
    category: Categories

    @ManyToMany(() => OrderDetails, (order) => order.products)
    @JoinTable()
    OrderDetails: OrderDetails[];

}