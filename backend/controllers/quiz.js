import db from "../database.js";

export const quiz = (req, res) => {
  const quizId = req.params.id;

  // query the database to fetch the quiz with the given ID
  const quizQuery = "SELECT * FROM quizzes WHERE id = ?";
  db.query(quizQuery, [quizId], (quizError, quizResults) => {
    if (quizError) {
      console.error(quizError);
      res.status(500).send("Server error");
      return;
    }

    // if no quiz is found with the given ID, return a 404 response
    if (quizResults.length === 0) {
      res.status(404).send("Quiz not found");
      return;
    }

    const quiz = quizResults[0];

    // query the database to fetch the questions for the quiz
    const questionsQuery = "SELECT * FROM questions WHERE quiz_id = ?";
    db.query(questionsQuery, [quizId], (questionsError, questionsResults) => {
      if (questionsError) {
        console.error(questionsError);
        res.status(500).send("Server error");
        return;
      }
      
      const questions = questionsResults;

      const answerQuery = "Select answer from questions where quiz_id = ?";
      db.query(answerQuery, [quizId], (answerError, answerResults) => {
        if(answerError){
          console.error(answerError);
          res.status(500).send("Server error");
        return;
        }

        const answers = answerResults;
        // return the quiz and questions as a JSON response
      res.json({ quiz, questions , answers});
      })


      
    });
  });
};

export default quiz;
