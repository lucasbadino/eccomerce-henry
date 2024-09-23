import { Injectable } from "@nestjs/common";
import { User } from "./usersDto/usersDto";

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
        const users = this.users.map(({ password, ...rest }) => ({ ...rest }));
        return users;
    }
    getUserById(id: number) {
        const { password, ...rest } = this.users.find((user) => user.id === id);;
        return { ...rest };
    }
    createUser(user: Omit<User, "id">) {
        const id = this.users.length + 1
        this.users = [...this.users, { id, ...user }]
        return id
    }
    uptadeUser(id: number, user: Omit<User, "id">) {
        const updatedUsers = this.users.map((us) => {
            if (us.id === id) {
                return { ...us, ...user };
            }
            return us;
        });
        const updatedUser = updatedUsers.find((us) => us.id === id);

        this.users = updatedUsers;

        return updatedUser;
    }
    deleteUser(id: number) {
        const deletedUser = this.users.find((user) => user.id === id)
        this.users = this.users.filter((us) => us.id !== id);
        return deletedUser;
    }
}
