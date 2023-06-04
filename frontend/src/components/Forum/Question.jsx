import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import EmptyList from '../EmptyList';
import axios from 'axios';
import QuestionAnswers from './QuestionAnswers';

const Question = () => {
  const { id } = useParams();
  const [q, setQ] = useState(null);
  // get the question from database 
  useEffect(() => {
    axios.get("http://localhost:3001/forum/viewforum").then((response) => {
        setQ((response.data).find((q) => q.id == parseInt(id)))
    });
  }, []); 

  // display question data
  return (
    <div>
        {q ? (
          <div>
            <h1 style={{textAlign:"center", marginTop:"5rem"}}>{q.title}</h1>
            <div style={{padding:"5rem", fontFamily:"sans-serif", fontSize:"20px"}}>{q.content}</div>
            {/* select the answers of this question from database by question id */}
            <QuestionAnswers qId={q.id}/>
          </div>
          ) : (<EmptyList />) // if there is not the question, generate the empty page
        }
    </div>
  );
}

export default Question;
