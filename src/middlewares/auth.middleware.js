import jwt from "jsonwebtoken";
import { CustomError } from "../utils/custom.error.js";

class AuthMiddleware {
    authenticate = (req, _, next) => {
        const { headers } = req;
        if (!headers.authorization) {
            throw new CustomError("You are not logged in. Please, log in", 401);
        }
        const [prefix, token] = headers.authorization.split(" ");

        if (!prefix || !token) {
            throw new CustomError("Not Valid Token", 400);
        }

        try {
            const payload = jwt.verify(token, process.env.JWT_SECRET);
            if (payload.userId) {
                req.userId = payload.userId;
            }

            if (payload.teamMember) {
                req.teamMember = payload.teamMember;
            }
            next();
        } catch (error) {
            throw new CustomError(error.message, 500);
        }
    };
}

export const authMiddleware = new AuthMiddleware();
