import { secondSectionData } from "../utils/pageData";
import { FaChevronRight } from "react-icons/fa";
import { FaStar } from "react-icons/fa6";
const SecondSection = () => {
  return (
    <div className=" w-full p-2 py-5 lg:p-10 ">
      <div className="text-center">
        <h2 className="text-xl font-bold">Best Deals</h2>
        <p className="text-sm font-semibold">Just for You</p>
      </div>

      <div className=" flex gap-5 mx-auto md:justify-center  overflow-x-auto md:overflow-hidden p-5 scrollbar-none ">
        {secondSectionData.map((d) => (
          <div className="relative" key={d.id}>
            <div className=" w-[110px] h-[110px] lg:w-[150px] lg:h-[150px]">
              <img
                src={d.img}
                className="rounded-lg  w-[110px] h-[110px] lg:w-[150px] lg:h-[150px]"
              />
            </div>
            <div className="flex flex-col items-center">
              <p className="font-bold text-sm lg:text-lg">Refreshing Mint</p>
              <p className="font-semibold text-sm lg:text-lg">30000MMK</p>
              <p className="font-semibold text-xs line-through">35000MMK</p>
              <p className=" text-yellow-400 text-sm lg:text-lg font-semibold">
                <span>
                  <FaStar className="inline text-xs" />{" "}
                </span>
                600 Points
              </p>
            </div>
            <div className=" bg-red-500 p-1 px-5 text-center absolute top-0 left-4  lg:left-10 z-20">
              <p className="text-xs text-white">25% off</p>
            </div>
          </div>
        ))}
      </div>
      <div className="flex gap-2 items-center justify-center w-[200px] bg-gray-200 rounded-xl mx-auto py-2  px-10 cursor-pointer">
        <h2 className="">View More</h2> <FaChevronRight />{" "}
      </div>
    </div>
  );
};
export default SecondSection;
