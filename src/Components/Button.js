import React from "react";

const Button = ({
  onClick,
  label = "Add text",
  bgcolor = "#6558f5",
  block = false,
}) => {
  return (
    <button
      onClick={onClick}
      className={`text-white ${block ? "block" : ""} px-4 py-2 rounded-md hover:opacity-80`}
      style={{ backgroundColor: bgcolor }} 
    >
      {label}
    </button>
  );
};

export default Button;
