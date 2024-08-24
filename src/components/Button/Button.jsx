import React from "react";
import "./Button.css";
function Button({ btnValue, isActive }) {
  return (
    <>
      <button className={`btn ${isActive ? "btn-enabled" : "btn-disabled"}`}>
        {btnValue}
      </button>
    </>
  );
}

export default Button;
