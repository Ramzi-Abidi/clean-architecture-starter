import { User } from "../../entities/User";

export interface IUserRepository {
    create(data: User): Promise<User>;
    findByPk(id: string): Promise<Partial<User>>;
}
