import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Edit = () => {
  const history = useNavigate();
  const { state } = useLocation();
  const [description, setDescription] = useState("");

  const cancel = () => {
    history("/");
  };

  const update = (i) => {
    setDescription(i.target.value);
  };

  const save = () => {
    const presentList = JSON.parse(localStorage.getItem("presentList"));

    const packageIndex = presentList.findIndex(
      (pkg) => pkg.name === state.name
    );

    if (description.trim() !== "") {
      presentList[packageIndex].description = description.trim();
      localStorage.setItem("presentList", JSON.stringify(presentList));
    }

    history("/");
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="w-[400px] bg-white rounded-lg p-6 shadow-md">
        <h2 className="text-3xl font-semibold text-center mb-4">Edit Description</h2>

        <div className="text-lg">
          <div>
            <span className="font-bold">Name:</span> {state.name}
          </div>
          <div className="mt-2">
            <span className="font-bold">Description:</span>{" "}
            {state.description}
          </div>
        </div>
        <div className="mt-4">
        <span className="font-bold">Update Description:</span>
          <textarea
            id="description"
            value={description}
            onChange={update}
            className="w-full px-4 py-2 rounded-lg resize-none border border-gray-300 focus:outline-none focus:ring focus:ring-blue-400 focus:border-blue-500"
            placeholder="Enter new description..."
          />
        </div>
        <div className="mt-4 flex justify-center space-x-4">
          <button
            className="px-6 py-2 text-lg font-semibold text-white bg-blue-500 rounded hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-400 focus:border-blue-500"
            onClick={save} style={{ backgroundColor: "#6558F5" }}
          >
            Save
          </button>
          <button
            className="px-6 py-2 text-lg font-semibold text-white bg-red-500 rounded hover:bg-red-600 focus:outline-none focus:ring focus:ring-red-400 focus:border-red-500"
            onClick={cancel}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default Edit;
