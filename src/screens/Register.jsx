import React from 'react'

const Register = () => {
  return (
    <form>
      <div className="mt-4 md:px-16 px-3 pb-8">

      <div className="flex flex-col">
          <span className="text-[16px] text-slate-500">
          Full Name *
          </span>
          <input
            type="text"
            className="py-2 mt-4 pl-3 outline-yellow-300  border"
            id=""
          />
        </div>

        <div className="flex mt-3 flex-col">
          <span className="text-[16px] text-slate-500">
          Your email address *
          </span>
          <input
            type="text"
            className="py-2 mt-4 pl-3 outline-yellow-300  border"
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

        <div className="flex justify-between border-b py-4 items-center mt-4">
          <div className="">
            <button className="py-2 text-yellow-500 font-semibold text-[14px] hover:bg-yellow-500 hover:text-white px-7 outline-yellow-500 border-yellow-500 border">
              SIGN UP
            </button>
          </div>

          <div className="md:flex items-center  hidden">
            <input type='checkbox' className='text-black bg-black'/>
            <span className="text-slate-500 pl-2">I agree to the privacy policy *</span>
          </div>
        </div>
      </div>
    </form>
  )
}

export default Register