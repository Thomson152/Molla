import Tab from "./Tab";
import { FaTimes } from "react-icons/fa";

const Model = ({ setOpenModel }) => {
  return (
    <div
  
      className="fixed  z-20 inset-0  bg-black bg-opacity-25 backdrop-blur-0 flex justify-center "
    >
      <div className="md:w-[600px] md:mt-10 mt-2w-[400px]">
        <div className="bg-white pt-5 p-2 rounded">
          <button
            onClick={() => {
              setOpenModel(false);
            }}
            className="relative text-2xl  md:left-[35rem] left-[19rem] top-1"
          >
            <FaTimes className="text-base" />
          </button>

          <div className=" ">
            <Tab />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Model;
