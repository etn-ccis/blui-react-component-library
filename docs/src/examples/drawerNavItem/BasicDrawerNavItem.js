import React, { useEffect } from "react";
import Prism from "prismjs";

export default function BasicDrawerNavItem({ code, language }) {
  useEffect(() => {
    Prism.highlightAll();
  }, []);
  return (
    <div className="Code">
      <h2> Code Syntax Block {language}</h2>
      <pre className="line-numbers">
        <code className={`language-${language}`}>{code}</code>
      </pre>
    </div>
  );
}