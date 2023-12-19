import { Router } from "express";
import { postController } from "../controller/post.controller.js";
import { authMiddleware } from "../middlewares/auth.middleware.js";

const postRouter = Router();
postRouter.post("/", authMiddleware.authenticate, postController.create);

export { postRouter };
