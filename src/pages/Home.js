import React, { useEffect, useState } from "react";
import Button from "../Components/Button";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const history = useNavigate();
  const [presentList, setPresentList] = useState(
    JSON.parse(localStorage.getItem("presentList") || "[]")
  );

  useEffect(() => {
    localStorage.setItem("presentList", JSON.stringify(presentList));
  }, [presentList]);

  const addfav = () => {
    history("/add", { state: "Assignment" });
  };

  const handleViewClick = (value) => {
    history("/view", { state: value });
  };

  const handleEditClick = (value) => {
    history("/edit", { state: value });
  };

  
  const handleDeleteClick = (value) => {
    // if (window.confirm(`Are you sure you want to delete ${value.name}?`)) {
    //   const updatedList = presentList.filter((pkg) => pkg.name !== value.name);
    //   setPresentList(updatedList);
    // }
    history("/del", { state: value });
  };

  return (
    <div className="p-8 md:p-12 min-h-screen bg-white">
       <div className="flex justify-between">
        <div style={{ fontSize: '2em' }} className="heading">
          Welcome to the Favorite NPM Packages.
        </div>
        {presentList.length > 0 ? (
          <>
            <div className="text-center">
              <Button onClick={addfav} label="Add Fav" />
            </div>
          </>
        ) : null}
      </div>
      

      {presentList.length > 0 ? (
        <div className="mt-12 border border-slate-400">
          <table className="w-full text-xl font-semibold">
            <thead>
              <tr className="bg-gray-100">
                <th className="p-4 text-left">Package Name</th>
                <th className="p-4 text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              {presentList.map((value, i) => (
                <tr key={i} className="border-t border-slate-400">
                  <td className="p-4 text-left">{value.name}</td>
                  <td className="p-4 text-center">
                    <span
                      onClick={() => handleViewClick(value)}
                      className="material-symbols-outlined text-gray-700 cursor-pointer mx-2"
                    >
                      visibility
                    </span>
                    <span
                      onClick={() => handleEditClick(value)}
                      className="material-symbols-outlined text-gray-700 cursor-pointer mx-2"
                    >
                      edit
                    </span>
                    <span
                      onClick={() => handleDeleteClick(value)}
                      className="material-symbols-outlined text-gray-700 cursor-pointer mx-2"
                    >
                      delete
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="mt-12 flex flex-col items-center border border-slate-400">
          <div className="text-xl font-medium p-6">
            You don't have any favorites yet. Please add.
          </div>
          <div className="mb-6">
            <Button onClick={addfav} label="Add Fav" />
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
