import { Module } from "@nestjs/common";
import { CategorySeed } from "./category/category.seed";
import { ProductsSeed } from "./products/products.seed";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Categories } from "src/modules/categories/categories.entity";
import { Products } from "src/modules/products/products.entity";

@Module({
    imports: [
        TypeOrmModule.forFeature([Categories, Products]),
    ],
    providers: [CategorySeed, ProductsSeed],
    exports: [CategorySeed, ProductsSeed]
})
export class SeedsModule { }