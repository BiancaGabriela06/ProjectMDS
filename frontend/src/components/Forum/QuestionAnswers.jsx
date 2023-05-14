import React, { useEffect, useState } from "react";
import axios from 'axios';
import NewAnswer from "./NewAnswer";

const QuestionAnswers = ({qId}) => {
    const [qList, setQlist] = useState([]);
    useEffect(() => {
        axios.get("http://localhost:3001/forum/viewforumanswers").then((response) => {
            setQlist((response.data).filter((q) => q.id_question == parseInt(qId)))
        });
    }, []);

    return (
        <div>
            {qList.map((q) => (
            <div className="card post-body">
                <h3>{q.content}</h3>
            </div>
            ))}
            <NewAnswer qId={qId}/>
        </div>
    );
}

export default QuestionAnswers;