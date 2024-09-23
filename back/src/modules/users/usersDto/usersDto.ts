import { IsString, IsEmail } from 'class-validator';
export class User {
    id: number;
    email: string;
    name: string;
    password: string;
    address: string;
    phone: string;
    country: string;
    city: string;
}


export class CreateUserDto {
    @IsEmail()
    email: string;

    @IsString()
    name: string;

    @IsString()
    password: string;

    @IsString()
    address: string;

    @IsString()
    phone: string;

    @IsString()
    country: string;

    @IsString()
    city: string;
}
export class UpdateUserDto {
    @IsEmail()
    email: string;

    @IsString()
    name: string;

    @IsString()
    password: string;

    @IsString()
    address: string;

    @IsString()
    phone: string;

    @IsString()
    country: string;

    @IsString()
    city: string;
}