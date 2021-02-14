import React from "react";
import '../styles/Button.css'

function Button({ text, imp, link }) {
  return (
    <div className={`button ${imp === "secondary" ? "button-white" : ""}`}>
      <a href={link}>
          {text}
      </a>
    </div>
  );
}

export default Button;
