import { Injectable } from "@nestjs/common";
import { Response } from "express";
import { AuthRepository } from "./auth.repository";

@Injectable()
export class AuthService {
    constructor(private readonly AuthRepository: AuthRepository) { }
    getAuth() {
        return "auth";
    }
    singin({ email, password }) {
        return this.AuthRepository.singin(email, password);
    }
}