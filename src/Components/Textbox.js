import React from "react";

const Textbox = ({ value, onChange }) => {
  return (
    <div>
      <textarea
        className="w-full h-[100px] p-3 border border-black "
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default Textbox;
