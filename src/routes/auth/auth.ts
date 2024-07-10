import express from "express";
import { AuthController } from "../../controllers/authController";
import { INTERFACE_TYPE } from "../../utils/constants";
import { Container } from "inversify";
import { IUserRepository } from "../../interfaces/user/IUserRepository";
import { IAuthInteractor } from "../../interfaces/auth/IAuthInteractor";
import { AuthInteractor } from "../../interactors/authInteractor";
import { UserRepository } from "../../repositories/userRepository";

const router = express.Router();

const container = new Container();

container.bind<IUserRepository>(INTERFACE_TYPE.UserRepository).to(UserRepository);
container.bind<IAuthInteractor>(INTERFACE_TYPE.AuthInteractor).to(AuthInteractor);
container.bind(INTERFACE_TYPE.AuthController).to(AuthController);

const controller = container.get<AuthController>(INTERFACE_TYPE.AuthController);

router.post("/signin", controller.signin.bind(controller));
router.post("/signup", controller.signup.bind(controller));

export default router;
