import { IsArray, IsNotEmpty, IsUUID, Length } from "class-validator"
import { Products } from "src/modules/products/products.entity";

export class CreateOrderDto {
    @IsNotEmpty()
    @IsUUID()
    userId: string;
    @IsArray()
    @Length(1)
    products: Products[]
}
