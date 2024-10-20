import { Module } from "@nestjs/common";
import { CategorySeed } from "./category/category.seed";
import { ProductsSeed } from "./products/products.seed";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Categories } from "src/modules/categories/categories.entity";
import { Products } from "src/modules/products/products.entity";
import { UsersSeed } from "./users/users.seed";
import { Users } from "src/modules/users/users.entity";

@Module({
    imports: [
        TypeOrmModule.forFeature([Categories, Products, Users]),
    ],
    providers: [CategorySeed, ProductsSeed, UsersSeed],
    exports: [CategorySeed, ProductsSeed, UsersSeed]
})
export class SeedsModule { }