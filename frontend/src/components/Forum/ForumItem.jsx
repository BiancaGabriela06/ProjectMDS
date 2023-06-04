import React from 'react';
import { Link } from 'react-router-dom';

const ForumItem = ({
    question: {
        id,
        title,
        content,
        username,
    },
}) => {
    // this is how the question will display in a list
    return (
        <div className='card-body' style={{backgroundColor: "#a8d0da"}}>
            <h3>{title}</h3>
            <h5 style={{float: "right"}}>made by {username}</h5>
            <div>{content}</div>
            {/* then we can see every question separately using route by id */}
            <Link to={`/forum/question/${id}}`}>
                see details
            </Link>
        </div>
    );
};

export default ForumItem;