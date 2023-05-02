import React, { useEffect, useState } from "react";
import ForumQuestions from "../components/Forum/ForumQuestions";
import '../css/Forum.css';
import NewPost from "../components/Forum/NewPost";
import axios from "axios";

const Forum = () => {
    const [qList, setQlist] = useState([]);
    useEffect(() => {
        axios.get("http://localhost:3001/forum/viewforum").then((response) => {
            setQlist(response.data)
        });
    }, []);

    return (
        <div>
            <h1 style={{margin: '0 10%'}}>All the questions:</h1>
            <br />
            <ForumQuestions questions={qList}/>
            <br />
            <NewPost />
        </div>
    );
};

export default Forum;