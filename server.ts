import "reflect-metadata";
import express from "express";
import authRoutes from "./src/routes/auth";

const PORT = 5000;

const app = express();

app.use(express.json());

// // to prevent blocking the http requests
// app.use(cors());

app.use("/api/v1/auth", authRoutes);

app.listen(PORT, () => {
    console.log(`Listening to port ${PORT}`);
});
