import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import apiRouter from "./routers/api.js";
dotenv.config();

const app = express();

app.use(cors());

app.use(express.json({ extended: true }));

app.use("/api", apiRouter);

app.listen(process.env.PORT, () =>
  console.log(`Server Started at PORT: ${process.env.PORT}`)
);
