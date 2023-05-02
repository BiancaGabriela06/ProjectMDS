import React from "react";
import "../css/Header.css";

function ArticleHeader({ title, subtitle }) {
  return (
    <header className="header">
      <h1 className="header__title">{title}</h1>
      <p className="header__subtitle">{subtitle}</p>
    </header>
  );
}

export default ArticleHeader;
