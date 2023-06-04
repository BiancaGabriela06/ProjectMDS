import db from "../database.js";

export const quizList = (req, res) => {
  // query to fetch all quizzes from the database
  const query = "SELECT * from quizzes";

  // execute the database query
  db.query(query, (error, results) => {
    if (error) {
      // if an error occurred during the query, log the error and send a 500 response
      console.error(error);
      res.status(500).send("Server error");
    } else {
      // if the query was successful, send the quiz list as a JSON response
      res.json(results);
    }
  });
};

export default quizList;
