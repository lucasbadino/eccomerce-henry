import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Role } from "src/modules/auth/authRoles/roles.auth";
import { Users } from "src/modules/users/users.entity";
import { Repository } from "typeorm";

@Injectable()

export class UsersSeed {
    constructor(
        @InjectRepository(Users)
        private readonly usersRepository: Repository<Users>
    ) { }

    async preloadUsers() {
        const response = await fetch('https://jsonplaceholder.typicode.com/users?_limit=2');
        const users = await response.json();

        const promises = users.map(async user => {
            const existingUser = await this.usersRepository.findOne({ where: { email: user.email } });
            if (!existingUser) {
                const newUser = this.usersRepository.create({
                    name: user.name,
                    email: user.email,
                    password: user.name + "A123_",
                    address: user.address.street,
                    phone: user.phone.replace(/\D/g, '').substring(0, 10),
                    country: "Argentina",
                    city: user.address.city,
                    role: Role.Admin
                });
                await this.usersRepository.save(newUser);

            }
        });
        await Promise.all(promises);
    }
}