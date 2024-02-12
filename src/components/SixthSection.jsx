import { secondSectionData } from "../utils/pageData";
import { FaStar } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
import { useRef } from "react";

import img from "../asset/img/1.png";

const SixthSection = () => {
  const elementRef = useRef();

  const sliderLeft = (element) => {
    element.scrollLeft -= 500;
  };
  const sliderRight = (element) => {
    element.scrollLeft += 500;
  };
  return (
    <div className="max-w-[1300px] p:1 lg:px-16  lg:mx-auto">
      <div className=" p-1  lg:px-10 flex flex-col gap-4 ">
        <div className="relative">
          <FaArrowLeft
            className={`hidden md:block text-white text-[30px] absolute left-1/3
        mx-8 mt-[100px] cursor-pointer z-10`}
            onClick={() => sliderLeft(elementRef.current)}
          />
          <FaArrowRight
            className={`hidden md:block text-white text-[30px] absolute
        mx-8 mt-[100px] cursor-pointer right-0 z-10`}
            onClick={() => sliderRight(elementRef.current)}
          />
          <div className=" h-[200px] w-full md:h-[270px] lg:h-[300px]">
            <img
              src={img}
              className=" max-w-[1110px] h-[200px] w-full md:h-[270px] lg:h-[300px] rounded-lg object-cover object-left"
              alt=""
            />
          </div>

          <div className="">
            <div
              className=" absolute  top-2 left-2/4 md:top-5 lg:left-1/3 max-w-[150px]
             sm:max-w-[250px] md:max-w-[370px]  lg:max-w-[500px] xl:max-w-[700px] flex gap-2 
              mx-auto overflow-x-auto scrollbar-none  p-5 px-5 scroll-smooth"
              ref={elementRef}
            >
              {secondSectionData.map((c) => (
                <div className="relative" key={c.id}>
                  <div className=" w-[80px] h-[80px]  md:w-[150px]   md:h-[150px]">
                    <img
                      src={c.img}
                      className="rounded-lg  w-[80px] h-[80px]  md:w-[150px]  md:h-[150px] "
                    />
                  </div>

                  <div className="flex flex-col items-center text-[0.5rem]  md:text-xs text-white mt-2">
                    <p className="font-bold ">Refreshing Mint</p>
                    <p className="font-semibold ">30000MMK</p>
                    <p className="font-semibold  line-through">35000MMK</p>
                    <p className=" text-yellow-400  font-semibold">
                      <span>
                        <FaStar className="inline" />{" "}
                      </span>
                      600 Points
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SixthSection;
