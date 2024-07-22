import "reflect-metadata";
import express from "express";
import authRoutes from "./src/routes/auth";

const PORT = 5000;

const app = express();

app.use(express.json());

app.use("/api/v1/auth", authRoutes);

app.listen(PORT, () => {
    console.log(`Listening to port ${PORT}`);
});
