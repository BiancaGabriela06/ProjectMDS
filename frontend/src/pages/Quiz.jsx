import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Quiz = (props) => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState('');
  const [timeLeft, setTimeLeft] = useState(60);

  useEffect(() => {
    axios.get(`http://localhost:3001/quiz/"{props.match.params.id}"`)
      .then(res => {
        console.log('Response data:', res.data);
        setQuestions(res.data);
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
    const answer = questions[currentQuestion].options.find(option => option.value === selectedOption);
    if (answer.isCorrect) {
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

  return (
    <div>
      <h2>Question {currentQuestion + 1}</h2>
      <p>{questions[currentQuestion].question}</p>
      <div>
        {questions[currentQuestion].options.map((option) => (
          <div key={option.value}>
            <label>
              <input type="radio" value={option.value} checked={selectedOption === option.value} onChange={handleOptionChange} />
              {option.text}
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
