import express from "express";
import cors from "cors";
import authRoutes from "./routes/auth.js";
import userRoutes from "./routes/users.js";
import cookieParser from "cookie-parser";
import quizRoutes from "./routes/quiz.js";
import quizListRoutes from "./routes/quizList.js";
import forumRoutes from "./routes/forum.js";

const app = express();

app.use(express.json());
app.use(cors());
app.use(cookieParser());
app.use("/auth", authRoutes);
app.use("/users", userRoutes);
app.use("/quiz", quizRoutes);
app.use("/quizList", quizListRoutes);
app.use("/forum", forumRoutes);

app.get("/getData", (req, res) => {
    res.send("Hello");
})

app.listen(3001, () => 
    console.log("App is listening"));