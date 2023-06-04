import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const Quiz = () => {
  // variables
  const [questions, setQuestions] = useState([]); // Array to store quiz questions
  const [currentQuestion, setCurrentQuestion] = useState(0); // Index of current question
  const [selectedOption, setSelectedOption] = useState(""); // Selected option for the current question
  const [timeLeft, setTimeLeft] = useState(60); // Countdown timer
  const [correctAnswers, setCorrectAnswers] = useState(0); // Count of correct answers

  // get quiz id
  const { id } = useParams();

  // fetch quiz data from the server
  useEffect(() => {
    axios
      .get(`http://localhost:3001/quiz/${id}`)
      .then((res) => {
        console.log("Response data:", res.data.questions);
        setQuestions(res.data.questions);
      })
      .catch((err) => {
        console.log("Error fetching quiz data:", err);
      });
  }, [id]);

  // timer
  useEffect(() => {
    let interval = null;
    if (timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft((prevTimeLeft) => prevTimeLeft - 1);
      }, 1000);
    } else {
      clearInterval(interval);
      handleQuizComplete(); // when time runs out, the quiz is completed
    }
    return () => clearInterval(interval);
  }, [timeLeft]);

  // handler for options
  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };

  // handle quiz completion
  const handleQuizComplete = () => {
    const answer = questions[currentQuestion].answer;
    if (selectedOption === answer) {
      setCorrectAnswers((prevCorrectAnswers) => prevCorrectAnswers + 1);
    }
    setQuestions((prevQuestions) =>
      prevQuestions.map((question, index) => {
        if (index === currentQuestion) {
          return {
            ...question,
            selectedOption: selectedOption,
          };
        }
        return question;
      })
    );
    setCurrentQuestion((prevCurrentQuestion) => prevCurrentQuestion + 1);
    setSelectedOption("");
  };

  // loading screen
  if (questions.length === 0) {
    return <div>Loading...</div>;
  }

  // results and correct answers
  if (currentQuestion >= questions.length) {
    const totalQuestions = questions.length;
    return (
      <div>
        <h2>Quiz Complete</h2>
        <p>
          You got {correctAnswers} out of {totalQuestions} questions correct.
        </p>
        {questions.map((question, index) => (
          <div key={index}>
            <p>
              {index + 1}.{" "}
              {question.answer === question.selectedOption ? (
                <span className="correct">Correct</span>
              ) : (
                <span className="incorrect">Incorrect</span>
              )}
            </p>
            <p>
              Your answer:{" "}
              <span
                className={
                  question.answer === question.selectedOption
                    ? "correct-answer"
                    : "incorrect-answer"
                }
              >
                {question.selectedOption}
              </span>
              <br />
              Correct answer:{" "}
              <span className="correct-answer">{question.answer}</span>
            </p>
          </div>
        ))}
      </div>
    );
  }

  // render the current question
  const question = questions[currentQuestion];
  const options = [
    question.option1,
    question.option2,
    question.option3,
    question.option4,
  ];

  return (
    <div>
      <h2>Question {currentQuestion + 1}</h2>
      <p>{question.question}</p>
      <div>
        {options.map((option, index) => (
          <div key={index}>
            <label>
              <input
                type="radio"
                value={option}
                checked={selectedOption === option}
                onChange={handleOptionChange}
              />
              {option}
            </label>
          </div>
        ))}
      </div>
      <p>Time Left: {timeLeft} seconds</p>
      <button onClick={handleQuizComplete}>Submit</button>
    </div>
  );
};

export default Quiz;
