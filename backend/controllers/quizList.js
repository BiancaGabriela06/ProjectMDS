/*
import db from "../database.js";

const quizList = {
  async getQuizzes(req, res) {
    try {
      const quizzes = await db.query("SELECT * FROM quizzes");
      res.json(quizzes.rows);
    } catch (error) {
      console.error(error);
      res.status(500).send("Server error");
    }
  },
};

export default quizList;
*/

/*
import quizzes from "../data/quizzes.json" assert { type: "json" };

const quizList = {
  getQuizzes(req, res) {
    try {
      res.json(quizzes);
    } catch (error) {
      console.error(error);
      res.status(500).send("Server error");
    }
  },
};

export default quizList;

import quizzes from "../data/quizzes.json" assert { type: "json" };
import path from "path";

const quizList = {
  getQuizzes(req, res) {
    try {
      res.json(quizzes);
    } catch (error) {
      console.error(error);
      res.status(500).send("Server error");
    }
  },
};

export default quizList;
*/

import db from "../database.js";

export const quizList = (req, res) => {
  const query = "SELECT * from quizzes";
  console.log(req.body);

  db.query(query, (error, results) => {
    console.log(results);
    if (error) {
      console.error(error);
      res.status(500).send("Server error");
    } else {
      res.json(results);
    }
  });
};

export default quizList;
