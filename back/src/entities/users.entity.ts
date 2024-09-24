import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { v4 as uuid } from 'uuid';
import { Orders } from './orders.entity';

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
    @Column()
    phone: number
    @Column({
        length: 50
    })
    country: string
    @Column({
        length: 50
    })
    address: string
    @Column()
    city: string
    @OneToMany(() => Orders, (order) => order.user)
    orders: Orders[]
}