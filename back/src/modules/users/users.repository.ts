import { Injectable } from "@nestjs/common";

@Injectable()
export class UsersRepository {
    private users = [
        {
            id: 1,
            email: "lucasbadino@gmail.com",
            name: "lucasbadino",
            password: "lucasbadino",
            address: "luis r garcia 1092",
            phone: "123456789",
            country: "Argetina",
            city: "Cordoba"
        },
        {
            id: 2,
            email: "pruebadino@gmail.com",
            name: "pruebadino",
            password: "pruebadino",
            address: "luis r garcia 1092",
            phone: "123456789",
            country: "Argetina",
            city: "Cordoba"
        },
        {
            id: 3,
            email: "test@gmail.com",
            name: "test",
            password: "test",
            address: "luis r garcia 1092",
            phone: "123456789",
            country: "Argetina",
            city: "Cordoba"
        }
    ]
    getUsers() {
        return this.users;
    }
}