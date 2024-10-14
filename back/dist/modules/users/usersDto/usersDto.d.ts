export declare class CreateUserDto {
    name: string;
    email: string;
    password: string;
    address: string;
    phone: number;
    country: string;
    city: string;
}
declare const UpdateUserData_base: import("@nestjs/common").Type<Partial<Pick<CreateUserDto, "name" | "email" | "password" | "address" | "phone" | "country" | "city">>>;
export declare class UpdateUserData extends UpdateUserData_base {
    name?: string;
    email?: string;
    password?: string;
    address?: string;
    phone?: number;
    country?: string;
    city?: string;
}
export {};
