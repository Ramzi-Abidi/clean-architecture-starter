import { inject, injectable } from "inversify";
import { IAuthInteractor } from "../interfaces/auth/IAuthInteractor";
import { IUserRepository } from "../interfaces/user/IUserRepository";
import { INTERFACE_TYPE } from "../utils/constants";
import { User } from "../entities/User";

@injectable()
export class AuthInteractor implements IAuthInteractor {
    constructor(
        @inject(INTERFACE_TYPE.UserRepository)
        private repository: IUserRepository,
    ) {}

    async signUp(input: any) {
        try {
            console.log("Sign up interactor");
            const createdUser = await this.repository.create(input);
            return {
                status: 200,
                data: {
                    user: createdUser,
                },
            };
        } catch (err) {
            console.log(err);
            return {
                status: 500,
                data: {
                    user: "Error occurred please try again!",
                },
            };
        }
    }

    async signIn(input: any) {
        try {
            console.log("Sign in interactor");
            const user: Partial<User> = await this.repository.findByPk(input);
            return {
                status: 200,
                data: {
                    user: user,
                },
            };
        } catch (err) {
            console.log(err);
            return {
                status: 500,
                data: {
                    user: "Error occurred!",
                },
            };
        }
    }
}
