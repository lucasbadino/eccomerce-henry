"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersRepository = void 0;
const common_1 = require("@nestjs/common");
let UsersRepository = class UsersRepository {
    constructor() {
        this.users = [
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
        ];
    }
    getUsers() {
        const users = this.users.map(({ password, ...rest }) => ({ ...rest }));
        return users;
    }
    getUserById(id) {
        const { password, ...rest } = this.users.find((user) => user.id === id);
        ;
        return { ...rest };
    }
    createUser(user) {
        const id = this.users.length + 1;
        this.users = [...this.users, { id, ...user }];
        return id;
    }
    uptadeUser(id, user) {
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
    deleteUser(id) {
        const deletedUser = this.users.find((user) => user.id === id);
        this.users = this.users.filter((us) => us.id !== id);
        return deletedUser;
    }
};
exports.UsersRepository = UsersRepository;
exports.UsersRepository = UsersRepository = __decorate([
    (0, common_1.Injectable)()
], UsersRepository);
//# sourceMappingURL=users.repository.js.map