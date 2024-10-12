import { IsEmail, IsNotEmpty, IsNumber, IsString, IsStrongPassword, Length } from "class-validator";


export class LoginUserDto {
    @IsNotEmpty()
    @IsEmail()
    email: string;
    @IsString()
    @IsNotEmpty()
    password: string;
} 

export class singupDto {
    @IsString()
    @IsNotEmpty()
    @Length(3, 80)
    name: string
    @IsNotEmpty()
    @IsEmail()
    @Length(3, 80)
    email: string
    @IsStrongPassword({
        minLowercase: 1,
        minUppercase: 1,
        minNumbers: 1,
        minSymbols: 1,
    })
    @Length(8, 15)
    password: string
    @IsStrongPassword({
        minLowercase: 1,
        minUppercase: 1,
        minNumbers: 1,
        minSymbols: 1,
    })
    @Length(8, 15)
    confirmPassword: string
    @IsString()
    @Length(3, 80)
    address: string
    @IsNumber()
    @IsNotEmpty()
    phone: number
    @IsString()
    @Length(5, 20)
    country: string
    @IsString()
    @Length(5, 20)
    city: string
}