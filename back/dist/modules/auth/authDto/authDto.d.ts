export declare class singupDto {
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
    address: string;
    phone: number;
    country: string;
    city: string;
    role: string;
}
declare const LoginUserDto_base: import("@nestjs/common").Type<Pick<singupDto, "email" | "password">>;
export declare class LoginUserDto extends LoginUserDto_base {
}
export {};
