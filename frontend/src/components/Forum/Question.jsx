import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import EmptyList from '../EmptyList';
import axios from 'axios';

const Question = () => {
  // const { id } = useParams();
  // const [question, setQuestion] = useState(null);

  // useEffect(() => {
  //   let question = questionsList.find((question) => question.id === parseInt(id));
  //   if (question) {
  //     setQuestion(question);
  //   }
  // }, []);

  // return (
  //       <>
  //         <div>
  //           {question ? (
  //           <div>
  //               <h1 style={{textAlign:"center", marginTop:"5rem"}}>{question.title}</h1>
  //               <div style={{padding:"5rem", fontFamily:"sans-serif", fontSize:"20px"}}>{question.content}</div>
  //           </div>
  //         ) : (<EmptyList />)} 
  //         </div>
                  
  //       </>
  // );

  const { id } = useParams();
  const [q, setQ] = useState(null);
  useEffect(() => {
    axios.get("http://localhost:3001/forum/viewforum").then((response) => {
        setQ((response.data).find((q) => q.id == parseInt(id)))
    });
  }, []); 

  return (
    <div>
        {q ? (
          <div>
            <h1 style={{textAlign:"center", marginTop:"5rem"}}>{q.title}</h1>
            <div style={{padding:"5rem", fontFamily:"sans-serif", fontSize:"20px"}}>{q.content}</div>
          </div>
          ) : (<EmptyList />)
        }
    </div>
  );
}

export default Question;
