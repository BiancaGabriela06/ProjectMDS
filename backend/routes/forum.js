import express from "express";
import {newpost, viewforum} from "../controllers/forum.js"

const router = express.Router()

router.post('/newpost', newpost)
router.get('/viewforum', viewforum)

export default router;