import React from 'react';
import { Link } from 'react-router-dom';

const ForumItem = ({
    question: {
        id,
        title,
        content,
    },
}) => {
    return (
        <div className='card-body'>
            <h3>{title}</h3>
            <div>{content}</div>
            <Link to={`/forum/question/${id}}`}>
                see details
            </Link>
        </div>
    );
};

export default ForumItem;