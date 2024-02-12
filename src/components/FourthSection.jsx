import { newReleaseData } from "../utils/pageData";
import { FaChevronRight } from "react-icons/fa";
const FourthSection = () => {
  return (
    <div className="max-w-[1300px] p-5 md:p-16 mx:5 md:mx-auto text-sm md:text-lg ">
      <div className="text-center">
        <h2 className="text-2xl text-red-600 font-bold ">
          New <p className="text-2xl font-bold inline text-black">Release</p>
        </h2>
        <p className="font-semibold ">Try our latest favour here</p>
      </div>
      <div className=" flex gap-3 mx-auto lg:justify-center  overflow-x-auto lg:overflow-hidden p-5 scrollbar-none ">
        {newReleaseData.map((d) => (
          <img src={d.img} className="w-[200px] rounded-lg" key={d.id} />
        ))}
      </div>{" "}
      <div className="flex gap-2 items-center mt-2 justify-center w-[200px] bg-gray-200 rounded-xl mx-auto py-2  px-10 cursor-pointer">
        <h2 className="">View More</h2> <FaChevronRight />{" "}
      </div>
    </div>
  );
};
export default FourthSection;
