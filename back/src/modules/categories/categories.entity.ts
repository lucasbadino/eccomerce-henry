import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { v4 as uuid } from 'uuid'
import { Products } from "../products/products.entity";

@Entity({
    name: 'categories'
})
export class Categories {
    @PrimaryGeneratedColumn('uuid')
    id: string = uuid()
    @Column({
        length: 50
    })
    name: string
    @OneToMany(() => Products, (product) => product.category)
    products: Products[]
}