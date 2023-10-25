import express from "express";
import { getArticles } from "../controllers/api.js";

const router = express.Router();

router.get("/articles", getArticles);

export default router;
