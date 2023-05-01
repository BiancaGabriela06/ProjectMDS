import React from "react";
import "../css/Post.css";
import CodeBlock from "./CodeBlock";
import OutputCode from "./OutputCode";

function Post({ title, content, code, language, result, notSpaced }) {
  const styles = notSpaced ? {margin: "5px"} : {margin: "20px 50px"}; 
  return (
    <div className="post-container" style={styles}>
      <div className="post-content">
        <h1 className="post-name">{title}</h1>
        <div className="post-text">{content}</div>
        {code && <CodeBlock code={code} language={language} />}
        {result && <OutputCode codeOutput={result} />}
      </div>
    </div>
  );
}

export default Post;
