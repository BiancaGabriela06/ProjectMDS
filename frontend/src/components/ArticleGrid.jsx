import React from "react";
import Article from "./Article";

function ArticlesGrid({ articles }) {
  return (
    <div className="articles-grid">
      {articles.map((article) => (
        <Article
          key={article.id}
          title={article.title}
          author={article.author}
          date={article.date}
          content={article.content.slice(0, 250) + "..."}
          page={article.page}
          image={article.image}
        />
      ))}
    </div>
  );
}

export default ArticlesGrid;
