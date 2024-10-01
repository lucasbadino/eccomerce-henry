import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { v4 as uuid } from 'uuid';
import { Orders } from '../orders/orders.entity';

@Entity({
    name: 'users'
})
export class Users {
    @PrimaryGeneratedColumn('uuid')
    id: string = uuid()
    @Column({
        length: 50
    })
    name: string
    @Column({
        length: 50,
        unique: true
    })
    email: string
    @Column({
        length: 20
    })
    password: string
    @Column({
        type: 'bigint',
        nullable: true,
    })
    phone: number
    @Column({
        length: 50,
        nullable: true
    })
    country: string
    @Column({
        nullable: true
    })
    address: string
    @Column({
        nullable: true
    })
    city: string
    @OneToMany(() => Orders, (order) => order.user)
    orders: Orders[]
}