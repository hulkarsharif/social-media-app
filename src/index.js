import express from "express";
import { userRouter } from "./routes/user.routes.js";
import { GlobalError } from "./middlewares/global-error.middleware.js";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 4040;
app.use("/users", userRouter);
app.use(GlobalError.handle);

app.listen(PORT, () => {
    console.log("Server is running on ", PORT);
});
