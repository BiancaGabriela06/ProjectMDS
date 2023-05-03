import db from "../database.js";

export const quiz = (req, res) => {
  const quizId = req.params.id;

  const quizQuery = "SELECT * FROM quizzes WHERE id = ?";
  db.query(quizQuery, [quizId], (quizError, quizResults) => {
    if (quizError) {
      console.error(quizError);
      res.status(500).send("Server error");
      return;
    }

    if (quizResults.length === 0) {
      res.status(404).send("Quiz not found");
      return;
    }

    const quiz = quizResults[0];

    const questionsQuery = "SELECT * FROM questions WHERE quiz_id = ?";
    db.query(questionsQuery, [quizId], (questionsError, questionsResults) => {
      if (questionsError) {
        console.error(questionsError);
        res.status(500).send("Server error");
        return;
      }

      const questions = questionsResults;

      res.json({ quiz, questions });
    });
  });
};

export default quiz;
