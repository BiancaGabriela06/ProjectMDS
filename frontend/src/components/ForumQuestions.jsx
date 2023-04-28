import React from "react";
import Question from "./Question";

function ForumQuestions({ questions }) {
  return (
    <div>
      {questions.map((question) => (
        <div className="card post-body">
            <Question
            key={question.id}
            title={question.title}
            content={question.content}
            />
        </div>
      ))}
    </div>
  );
}

export default ForumQuestions;