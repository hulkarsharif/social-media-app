import express from "express";

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 4040;
app.use("/users", userRouter);

app.listen(PORT, () => {
    console.log("Server is running on ", PORT);
});
