import logo from "../assets/logo.png";
import { BsCart2 } from "react-icons/bs";
import { RxHamburgerMenu } from "react-icons/rx";
import { LiaSearchSolid } from "react-icons/lia";
import Model from "./Model";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [modelOpen, setModelOpen] = useState(false);
  const [scroll, setScroll] = useState(false);
  useEffect(() => {
    const handleScoll = () => {
      if (window.scrollY > 150) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };
    window.addEventListener("scroll", handleScoll);
  }, []);

  return (
    <div>
      <div className={`${scroll ? "hidden" : ""}`}>
        <div
          className={`bg-[#333333] md:block hidden text-[#d8d5d5]  xl:px-20 px-7 `}
        >
          <div className="flex py-3 font-normal font-sans justify-between border-[#5a5959] border-b">
            <p className="text-[14px]  ">Call: +0123 456 789</p>

            <p className="text-[14px] font-sans  hover:text-yellow-500">
              <button onClick={() => setModelOpen(true)} href="#">
                Sign up /Sign in
              </button>
            </p>
          </div>

          <div className="md:flex hidden justify-between py-5  items-center">
            <div className="logo">
              <img src={logo} alt="" />
            </div>

            <div className="search relative">
              <LiaSearchSolid className="absolute top-4 left-4 text-[22px] text-black" />
              <input
                type="text"
                placeholder="Search Product ..."
                className="w-[500px] text-[#cccccc] px-12 text-[16px] rounded-full py-3  outline-none"
              />
            </div>

            <div className="cart">
              <BsCart2 className="text-3xl font-semibold text-white" />
            </div>
          </div>
        </div>
        <div className="py-3 bg-white md:flex hidden  justify-between text-slate-800  px-14 border">
          <div className="">
            <h3>Browse Categories</h3>
          </div>
          <ul className="flex space-x-11  text-[16px] font-medium">
            <li>
              <a className="hover:text-yellow-500" href="#">
                Home
              </a>
            </li>
            <li>
              <a className="hover:text-yellow-500" href="#">
                Shop
              </a>
            </li>
            <li>
              <a className="hover:text-yellow-500" href="#">
                Pages
              </a>
            </li>
          </ul>

          <div className="">
            <h3>Clearance Up to 30% Off</h3>
          </div>
        </div>
      </div>

      <div
        className={`py-3 md:fixed  top-0  z-30 w-full bg-white flex justify-between
       text-slate-800  px-16 border  ${scroll ? " " : "hidden"}`}
      >
        <div className="">
          <h3>Browse Categories</h3>
        </div>
        <ul className="flex space-x-14  text-[16px] font-medium">
          <li>
            <a className="hover:text-yellow-500" href="#">
              Home
            </a>
          </li>
          <li>
            <a className="hover:text-yellow-500" href="#">
              Shop
            </a>
          </li>
          <li>
            <a className="hover:text-yellow-500" href="#">
              Pages
            </a>
          </li>
        </ul>

        <div className="">
          <h3>Clearance Up to 30% Off</h3>
        </div>
      </div>

      {/* Mobile navbar */}
      <div className={`bg-[#333333] md:hidden block text-[#d8d5d5]  px-4  `}>
        <div className="flex py-3 font-normal font-sans justify-between border-[#5a5959] border-b">
          <p className="text-[14px]  ">Call: +0123 456 789</p>

          <p className="text-[14px] font-sans  hover:text-yellow-500">
            <button onClick={() => setModelOpen(true)} href="#">
              Sign up /Sign in
            </button>
          </p>
        </div>

        <div className="flex justify-between py-5  items-center">
          <div className="flex space-x-3 items-center">
            <RxHamburgerMenu className="text-2xl"/>
            <div className="logo">
              <img src={logo} alt="" />
            </div>
          </div>

          <div className="search hidden relative">
            <LiaSearchSolid className="absolute top-4 left-4 text-[22px] text-black" />
            <input
              type="text"
              placeholder="Search Product ..."
              className="w-[500px] text-[#cccccc] px-12 text-[16px] rounded-full py-3  outline-none"
            />
          </div>

          <div className="cart">
            <BsCart2 className="text-3xl font-semibold text-white" />
          </div>
        </div>
      </div>

      {modelOpen && <Model setOpenModel={setModelOpen} />}
    </div>
  );
};

export default Navbar;
