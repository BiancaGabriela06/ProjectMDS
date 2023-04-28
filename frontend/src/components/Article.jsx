import React from "react";
import { Link } from "react-router-dom";

function Article({ title, author, date, content, page, image }) {
  return (
    <article> 
      <h2>
        <Link
          to={page}
          style={{
            color: "#0e3b88",
          }}
        >
          {title}
        </Link>
      </h2>
      <p>
        By {author} on {date}
      </p>
      <div className="space">{content}</div>
      <img src={image} alt="img" />
    </article>
  );
}

export default Article;
