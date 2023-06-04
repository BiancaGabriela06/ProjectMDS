import express from "express";
import quizList from "../controllers/quizList.js";

const router = express.Router();

router.get("/", quizList); // handle GET requests for the quiz list

export default router;
