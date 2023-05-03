import express from "express";
import quiz from "../controllers/quiz.js";

const router = express.Router();

router.get("/:id", quiz);

export default router;
