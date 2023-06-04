import express from "express";
import quiz from "../controllers/quiz.js";

const router = express.Router();

router.get("/:id", quiz); // handle GET requests for a specific quiz ID

export default router;
