import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const View = () => {
  const history = useNavigate();
  const { state } = useLocation();

  const exit = () => {
    history("/");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-3xl font-bold mb-4">Selected Package</h2>
        <div className="mb-4">
          <span className="text-lg font-semibold">Name:</span> {state.name}
        </div>
        <div className="mb-4">
          <span className="text-lg font-semibold">Description:</span>{" "}
          {state.description}
        </div>
        <button
          className="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 rounded"
          onClick={exit}  style={{ backgroundColor: "#6558F5" }}
        >
          Exit
        </button>
      </div>
    </div>
  );
};

export default View;
