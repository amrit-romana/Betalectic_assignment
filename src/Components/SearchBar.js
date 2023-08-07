import React from "react";


const SearchBar = ({ value, onChange, placeholder }) => {
  return (
    <div>
      <input
        className="w-full p-3 border-2 border-black"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    </div>
  );
};

export default SearchBar;
