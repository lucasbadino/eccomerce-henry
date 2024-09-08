export declare class ProductsRepository {
    private products;
    getProducts(): {
        id: number;
        name: string;
        description: string;
        price: number;
        stock: boolean;
        imgUrl: string;
    }[];
}
