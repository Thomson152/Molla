import React, { useState } from "react";
import Login from "../screens/Login";
import Register from "../screens/Register";

const Tab = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <div>
      <div className="flex justify-center">
        <button
          onClick={() => toggleTab(1)}
          className={`md:text-[23px] text-[18px] border-b text-slate-800 font-[400px] 
          font-sans py-1 outline-none md:px-20 px-14 hover:text-yellow-500
           hover:font-semibold ${
             toggleState == 1 ? "border-b-2 border-yellow-500" : "border-b"
           }`}
        >
         Sign In
        </button>
        <button
          onClick={() => toggleTab(2)}
          className={` md:text-[23px] text-[18px] border-b text-slate-800 font-[400px] 
          font-sans py-1 outline-none md:px-20 px-14 hover:text-yellow-500
           hover:font-semibold ${
             toggleState == 2 ? "border-b-2 border-yellow-500" : "border-b"
           }`}
        >
          Register{" "}
        </button>
      </div>
      <div className={`${toggleState === 1 ? "block " : "hidden"}`}>
        <Login />
      </div>

      <div className={`${toggleState === 2 ? "block " : "hidden"}`}>
        <Register />
      </div>
    </div>
  );
};

export default Tab;
