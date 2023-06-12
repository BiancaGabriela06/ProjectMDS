import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "../css/QuizList.css";

const QuizList = () => {
  const [quizzes, setQuizzes] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/quizList")
      .then((res) => {
        console.log("Response data:", res.data);
        setQuizzes(res.data);
      })
      .catch((err) => {
        console.log("Error fetching quiz data:", err);
      });
  }, []);

  // description for the page
  const pageDescription =
    "Welcome to the Quiz List page! Here, you can explore a variety of quizzes and test your knowledge on different subjects. Choose a quiz from the list below and start challenging yourself. Have fun and enjoy the learning experience!";

  return (
    <div>
      <div className="quiz-list">
        <h2 className="quiz-heading">List of Quizzes</h2>
        <div className="quiz-description">{pageDescription}</div>
      </div>
      <div className="quiz-box">
        {/* render each quiz card */}
        {quizzes.map((quiz) => (
          <div key={quiz.id} className="quiz-card">
            <div className="quiz-title">{quiz.title}</div>
            <div className="quiz-description">{quiz.description}</div>
            {/* link to start the quiz */}
            <Link to={`/quiz/${quiz.id}`} className="quiz-link">
              Start Quiz
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuizList;
