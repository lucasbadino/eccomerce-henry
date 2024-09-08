import { Injectable } from "@nestjs/common";

@Injectable()
export class ProductService{
    getPruducts(){
        return "Products";
    }
    
}