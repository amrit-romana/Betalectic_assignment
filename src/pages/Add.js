import React, { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router";
import SearchBar from "../Components/SearchBar";
import Textbox from "../Components/Textbox";
import Button from "../Components/Button";

const AddFav = () => {
  const history = useNavigate();
  
  const [presentList, setpresentList] = useState(
    JSON.parse(localStorage.getItem("presentList") || "[]") 
  );
  const [packages, setpackages] = useState([]); 
  const [searchinput, setSearchinput] = useState("");
  const [txtinput, setTxtinput] = useState("");
  const [Searching, setSearching] = useState(false);
  const [selected, setSelected] = useState([]);

  const getData = async (value) => {
    if (value) {
      setSearching(true);
      
      const response = await fetch(
        `https://registry.npmjs.org/-/v1/search?text=${value}`
      );
      
      const packages = await response.json();
      console.log(packages);
      
      setpackages(packages.objects);
      setSearching(false);
    }
  };

  useEffect(() => {
    localStorage.setItem("presentList", JSON.stringify(presentList)); //store presentList state in localStorage as a stringified JSON object
    if (selected.length !== 0) {
      history("/");
    }
  }, [presentList]);

  const limit = (func) => {
    let timeout;
    return function (...args) {
      if (timeout) clearTimeout(timeout);
      timeout = setTimeout(() => {
        timeout = null;
        func.apply(this, args);
      }, 100);
    };
  };
  const optimizedFn = useCallback(limit(getData), []);

  const handleRadioChange = (i) => {
    setSelected(i.target.value);
  };
  
  const submit = () => {
    if (selected && txtinput) {
      const newentry = [
        ...presentList,
        { name: selected, description: txtinput },
      ].filter((obj, index, self) => index === self.findIndex((o) => o.name === obj.name));
      
      setpresentList(newentry);
    } else {
      alert("Select a unique Package and Enter the 'why this is your fav' text");
    }
  };

  const search = (i) => {
    setSearchinput(i.target.value);
    optimizedFn(i.target.value);
  };
  
  return (
    <div className=" md:p-[5vh]">
      <div style={{ fontSize: '2em' }} className="heading">Search NPM Packages.</div>


  
      <div>
        <SearchBar
          onChange={(i) => search(i)}
          placeholder={"Search For a NPM package"}
        />
      </div>
      <h5 className="text-[1.2em] font-bold mt-4">Results</h5>
      {Searching ? (
        <div className="h-[400px]">SEARCHING...</div>
      ) : (
        <>
          <div className="mt-2 border border-black overflow-y-scroll h-[200px]">
         
            {packages.map((value, index) => {
              return (
                
                <div key={`${index}-${value.package.name}`}>
                  
                  <div className="text-[20px]">
                    <span>
                      <input
                        className="mr-3"
                        type="radio"
                        name="package"
                        value={value.package.name}
                        onChange={handleRadioChange}
                        checked={selected === value.package.name}
                      />
                    </span>
                    {value.package.name}
                  </div>
                </div>
              );
            })}
          </div>
        </>
      )}
  
      <div className="mt-10">
        <div className="heading text-[1.5em] ">
          Why is this your fav?
        </div>
        <Textbox pl
          value={txtinput}
          onChange={(i) => {
            setTxtinput(i.target.value);
          }}
        />
        <div className="text-right">
          <Button onClick={submit} label="Submit" />
        </div>
      </div>
    </div>
  );
  
};

export default AddFav;
