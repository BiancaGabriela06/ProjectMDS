import express from "express";
import quizList from "../controllers/quizList.js";

const router = express.Router();

router.get("/", quizList);
export default router;
