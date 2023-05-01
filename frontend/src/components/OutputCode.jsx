import React from "react";
import "../css/CodeBlock.css";

const OutputCode = ({ codeOutput }) => {
  return (
    <div className="code-output">
      <code className="code-output-text">{codeOutput}</code>
    </div>
  );
};

export default OutputCode;
