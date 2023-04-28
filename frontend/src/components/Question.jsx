import React from 'react';

function Question({ title, content }) {
  return (
    <question>
        <div className='card-body'>
            <h1>{title}</h1>
            <div>{content}</div>
        </div>
    </question>
  );
}

export default Question;
