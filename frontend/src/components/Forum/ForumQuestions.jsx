import React from "react";
import ForumItem from "./ForumItem";

const ForumQuestions = ({questions}) => {
  // this is the main component who contains the questions
  return (
    <div>
      {questions.map((q) => (
        <div className="card post-body">
            {/* we select every question as an item*/}
            <ForumItem question={q} />
        </div>
      ))}
    </div>
  );
}

export default ForumQuestions;