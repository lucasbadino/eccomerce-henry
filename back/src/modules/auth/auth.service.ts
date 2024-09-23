import { Injectable } from "@nestjs/common";
import { Response } from "express";
import { AuthRepository } from "./auth.repository";

@Injectable()
export class AuthService{
    constructor(private readonly AuthRepository: AuthRepository){}
    getAuth(){
        return "auth";
    }
    singin({email, password} ) {
        try {
            return this.AuthRepository.singin(email, password);
        } catch (error) {
            return {
                message: 'Error al iniciar sesion',
                error: error
            }
            
        }
    }
}