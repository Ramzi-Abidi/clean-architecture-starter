import { NextFunction, Request, Response } from "express";
import { IAuthInteractor } from "../interfaces/auth/IAuthInteractor";
import { inject, injectable } from "inversify";
import { INTERFACE_TYPE } from "../utils/constants";

@injectable()
export class AuthController {
    constructor(
        @inject(INTERFACE_TYPE.AuthInteractor)
        private interactor: IAuthInteractor,
    ) {}

    async signup(req: Request, res: Response, next: NextFunction) {
        const body = req.body;
        let result = await this.interactor.signUp(body);
        res.status(result.status).json(result);
    }

    async signin(req: Request, res: Response, next: NextFunction) {
        const body = req.body;
        let result = await this.interactor.signIn(body);
        res.status(result.status).json(result);
    }
}
