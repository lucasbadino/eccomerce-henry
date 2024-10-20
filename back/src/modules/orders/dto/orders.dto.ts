import { ApiProperty } from "@nestjs/swagger";
import { IsArray, IsNotEmpty, IsUUID, Length } from "class-validator"
import { Products } from "src/modules/products/products.entity";

export class CreateOrderDto {
    @ApiProperty({
        example: '123e4567-e89b-12d3-a456-426655440000',
        description: 'User id',
        required: true
    })
    @IsNotEmpty()
    @IsUUID()
    userId: string;
    @IsArray()
    products: Products[]
}
