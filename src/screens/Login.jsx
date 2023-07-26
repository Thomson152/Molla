import React from "react";

const Login = () => {
  return (
    <form>
      <div className="mt-4 md:px-16 px-3 pb-32">
        <div className="flex flex-col">
          <span className="text-[16px] text-slate-500">
            Username or email address *
          </span>
          <input
            type="text"
            className="py-2 pl-3 mt-4  outline-yellow-300  border"
            id=""
          />
        </div>

        <div className="flex mt-3 flex-col">
          <span className="text-[16px] text-slate-500">Password *</span>
          <input
            type="text"
            className="py-2 mt-4 pl-3 outline-yellow-300  border"
            id=""
          />
        </div>

        <div className="flex justify-between border-b py-5 items-center mt-4">
          <div className="">
            <button className="py-2  text-yellow-500 font-semibold text-[14px] hover:bg-yellow-500 hover:text-white px-7 outline-yellow-500 border-yellow-500 border">
              LOG IN
            </button>
          </div>

          <div className="">
            <button className="text-slate-500">Forgot Your Password?</button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Login;
