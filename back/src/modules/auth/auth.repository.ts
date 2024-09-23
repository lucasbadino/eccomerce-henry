import { Injectable } from "@nestjs/common";

@Injectable()
export class AuthRepository{
    singin(email: string, password: string) {
        if(!email || !password){
            throw new Error("Email or password not found");
        }
        return true;
        
    }

}