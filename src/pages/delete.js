import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Delete = () => {
  const location = useLocation();
  const history = useNavigate();
  const packageInfo = location.state;
  const [presentList, setPresentList] = useState(
    JSON.parse(localStorage.getItem("presentList") || "[]")
  );
  const handleDelete = () => {
    const updatedList = presentList.filter((pkg) => pkg.name !== packageInfo.name);
    setPresentList(updatedList);
    localStorage.setItem("presentList", JSON.stringify(updatedList)); // Update local storage if needed
    history('/');
  };

  const handleCancel = () => {
    history("/");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-3xl font-bold mb-4">Delete Package</h2>
        <div className="mb-4">
          <span className="text-lg font-semibold">Name:</span> {packageInfo.name}
        </div>
        <div className="mb-4">
          <span className="text-lg font-semibold">Description:</span> {packageInfo.description}
        </div>
        <div className="flex justify-between">
          <button
            className="w-full bg-red-500 hover:bg-red-600 text-white font-medium py-2 rounded mr-2"
            onClick={handleDelete}
          >
            Confirm Delete
          </button>
          <button
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 rounded"
            onClick={handleCancel}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default Delete;
