import { fifthData } from "../utils/pageData";
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
import { useRef } from "react";
const screenWidth = window.innerWidth;
const FifthSection = () => {
  const elementRef = useRef();

  const sliderLeft = (element) => {
    element.scrollLeft -= screenWidth - 400;
  };
  const sliderRight = (element) => {
    element.scrollLeft += screenWidth - 400;
  };
  return (
    <div className=" relative max-w-[1300px] p-3 md:p-16 mx:0 md:mx-auto ">
      {" "}
      <FaArrowLeft
        className={`hidden lg:block text-white text-3xl absolute 
      mx-8 mt-[150px] cursor-pointer z-10`}
        onClick={() => sliderLeft(elementRef.current)}
      />
      <FaArrowRight
        className={`hidden lg:block text-white text-3xl absolute
      mx-8 mt-[150px] cursor-pointer right-24 z-10`}
        onClick={() => sliderRight(elementRef.current)}
      />
      <div
        className="w-full flex gap-5 overflow-x-scroll p-0 lg:p-10 scrollbar-none scroll-smooth"
        ref={elementRef}
      >
        {fifthData.map((d) => (
          <div className="w-full flex-shrink-0 relative" key={d.id}>
            <img
              src={d.img}
              className="rounded-lg md:w-full h-[150px] md:h-full object-cover object-left"
            />

            <div className="absolute top-8  right-10 lg:top-20 lg:right-40 text-white flex flex-col gap-2 items-center text-sm">
              <h2 className=" text-md md:text-3xl font-bold ">
                Try New Flavor
              </h2>
              <p className="text-md text-gray-200 ">Citrus Monster</p>
              <p className="p-1 px-5 rounded-xl cursor-pointer bg-gray-800 text-white text-sm">
                View{" "}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default FifthSection;
