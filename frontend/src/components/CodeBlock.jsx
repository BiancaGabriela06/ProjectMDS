import React from "react";
import PropTypes from "prop-types";
import Prism from "prismjs";
import "prismjs/themes/prism-coy.css";
import "../css/CodeBlock.css";

const CodeBlock = ({ code, language }) => {
  const highlightedCode = Prism.highlight(
    code,
    Prism.languages[language] || Prism.languages.javascript
  );

  return (
    <pre
      className={`language-${language}`}
      style={{ backgroundColor: "white", margin: "25px 40px 25px 40px" }}
    >
      <code
        className={`language-${language}`}
        dangerouslySetInnerHTML={{ __html: highlightedCode }}
      />
    </pre>
  );
};

CodeBlock.propTypes = {
  code: PropTypes.string.isRequired,
  language: PropTypes.string.isRequired,
};

export default CodeBlock;
