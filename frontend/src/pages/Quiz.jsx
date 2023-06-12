import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import "../css/Quiz.css";

const Quiz = () => {
  // variables
  const [questions, setQuestions] = useState([]); // array to store quiz questions
  const [currentQuestion, setCurrentQuestion] = useState(0); // index of current question
  const [selectedOption, setSelectedOption] = useState(""); // selected option for the current question
  const [timeLeft, setTimeLeft] = useState(300); // countdown timer
  const [correctAnswers, setCorrectAnswers] = useState(0); // count of correct answers
  const [exerciseResults, setExerciseResults] = useState([]); // array to store exercise results

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
      handleQuizCompletion(); // when time runs out, complete the quiz
    }
    return () => clearInterval(interval);
  }, [timeLeft]);

  // handler for options
  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };

  // handle quiz completion
  const handleQuizCompletion = () => {
    const currentQuestionData = questions[currentQuestion];
    const isAnswerCorrect =
      currentQuestionData && selectedOption === currentQuestionData.answer;

    setExerciseResults((prevExerciseResults) => [
      ...prevExerciseResults,
      { exerciseNumber: currentQuestion, isAnswerCorrect },
    ]);

    if (isAnswerCorrect) {
      setCorrectAnswers((prevCorrectAnswers) => prevCorrectAnswers + 1);
    }

    setCurrentQuestion((prevCurrentQuestion) => prevCurrentQuestion + 1);
    setSelectedOption("");
  };

  // loading screen
  if (questions.length === 0) {
    return <div>Loading...</div>;
  }

  // check if time has expired
  if (currentQuestion < questions.length && timeLeft === 0) {
    handleQuizCompletion(); // complete the quiz when time expires
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
              {exerciseResults.length > 0 &&
              exerciseResults[index] &&
              exerciseResults[index].isAnswerCorrect ? (
                <span className="correct">Correct!</span>
              ) : (
                <span className="incorrect">
                  Incorrect! Correct answer is "{question.answer}".
                </span>
              )}
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
      <button onClick={handleQuizCompletion}>Submit</button>
    </div>
  );
};

export default Quiz;
