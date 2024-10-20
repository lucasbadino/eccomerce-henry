export declare class CreateProductDto {
    name: string;
    description: string;
    price: number;
    stock: number;
    imgUrl: string;
}
declare const UpdateProductDto_base: import("@nestjs/common").Type<Partial<Pick<CreateProductDto, "name" | "description" | "price" | "stock" | "imgUrl">>>;
export declare class UpdateProductDto extends UpdateProductDto_base {
    name?: string;
    description?: string;
    price?: number;
    stock?: number;
    imgUrl?: string;
}
export {};
