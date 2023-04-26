import React from 'react';

function Article({ title, author, date, content }) {
  return (
    <article>
      <h2>{title}</h2>
      <p>By {author} on {date}</p>
      <div>{content}</div>
    </article>
  );
}

export default Article

// fac buton, fac onclick o functie cu navigate
// si rutele le pun la gramada unde sunt toate