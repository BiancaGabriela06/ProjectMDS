import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Quiz = (props) => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState('');
  const [timeLeft, setTimeLeft] = useState(60);

  console.log(selectedOption);

  useEffect(() => {
    axios.get('http://localhost:3001/quiz/${params.match}')
      .then(res => {
        console.log("im here")
        console.log('Response data:', res.data.questions);
        setQuestions(res.data.questions);
      })
      .catch(err => {
        console.log('Error fetching quiz data:', err);
      });
  }, []);

  useEffect(() => {
    let interval = null;
    if (timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft(timeLeft - 1);
      }, 1000);
    } else {
      clearInterval(interval);
      alert('Time is up!');
    }
    return () => clearInterval(interval);
  }, [timeLeft]);

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };

  const handleNextClick = () => {
    setCurrentQuestion(currentQuestion + 1);
    setSelectedOption('');
  };

  const handleSubmitClick = () => {
    const answer = questions[currentQuestion].answer;
    if (selectedOption === answer) {
      alert('Correct answer!');
    } else {
      alert('Incorrect answer!');
    }
    setCurrentQuestion(currentQuestion + 1);
    setSelectedOption('');
  };

  if (questions.length === 0) {
    return (
      <div>Loading...</div>
    );
  }

  if (currentQuestion >= questions.length) {
    return (
      <div>
        <h2>Quiz Complete</h2>
        <p>You got X out of Y questions correct.</p>
      </div>
    );
  }

  const question = questions[currentQuestion];
  const options = [question.option1, question.option2, question.option3, question.option4];

  return (
    <div>
      <h2>Question {currentQuestion + 1}</h2>
      <p>{question.question}</p>
      <div>
        {options.map((option, index) => (
          <div key={index}>
            <label>
              <input type="radio" value={option} checked={selectedOption === option} onChange={handleOptionChange} />
              {option}
            </label>
          </div>
        ))}
      </div>
      <p>Time Left: {timeLeft} seconds</p>
      <button onClick={handleNextClick}>Next</button>
      <button onClick={handleSubmitClick}>Submit</button>
    </div>
  );
};

export default Quiz;
