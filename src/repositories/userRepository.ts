import { IUserRepository } from "../interfaces/user/IUserRepository";
import { User } from "../entities/User";
import { injectable } from "inversify";

@injectable()
export class UserRepository implements IUserRepository {
    async create(input: any): Promise<User> {
        return {
            email: "ramzi@gmail.com",
            password: "xxxxxxxx",
            name: "ramzi",
            confirmed: true,
            phoneNumber: "0000000",
        };
    }
    async findByPk(input: any): Promise<Partial<User>> {
        return {
            email: "ramzi@gmail.com",
            name: "ramzi",
            confirmed: true,
            phoneNumber: "0000000",
        };
    }
}
