import { IsString, IsBoolean, IsNumber } from 'class-validator';

export class Product {
    id: number;
    name: string;
    description: string;
    price: number;
    stock: boolean;
    imgUrl: string;
}

export class CreateProductDto {
    @IsString()
    name: string;
    @IsString()
    description: string;
    @IsNumber()
    price: number;
    @IsBoolean()
    stock: boolean;
    @IsString()
    imgUrl: string;
}