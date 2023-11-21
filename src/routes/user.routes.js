import { Router } from "express";
import { userController } from "../controller/user.controller.js";

const userRouter = Router();
userRouter.post("/sign-up", userController.signUp);
userRouter.post("/login", userController.login);
userRouter.get("/activate", userController.activate);

export { userRouter };
