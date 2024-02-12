import { FaSearch } from "react-icons/fa";
import { IoMdMenu } from "react-icons/io";

import { homeData } from "../utils/pageData";

import {
  BsFillArrowRightCircleFill,
  BsFillArrowLeftCircleFill,
} from "react-icons/bs";

import { CiShoppingCart } from "react-icons/ci";
import { useState } from "react";
import logo from "../asset/img/logo.png";
const FirstSection = () => {
  let [current, setCurrent] = useState(0);

  let previousSlide = () => {
    if (current === 0) setCurrent(homeData.length - 1);
    else setCurrent(current - 1);
  };

  let nextSlide = () => {
    if (current === homeData.length - 1) setCurrent(0);
    else setCurrent(current + 1);
  };
  return (
    <div className="relative">
      <div className="absolute top-0 z-10 flex justify-between p-6 md:px-16 md:py-10  w-full">
        <div className="flex items-center gap-1">
          <h2 className="text-xl font-semibold text-white">PI</h2>
          <img src={logo} className="w-3 h-3 " />
        </div>
        <div className="flex gap-3">
          {navIcons.map((d) => (
            <NavBarIcons Icon={d.icon} key={d.id} />
          ))}
        </div>
      </div>
      <div className=" ">
        <div className="overflow-hidden scroll-smooth relative">
          <div
            className={`flex w-screen transition ease-out duration-100`}
            style={{
              transform: `translateX(-${current * 100}%)`,
            }}
          >
            {homeData.map((s) => {
              return (
                <img
                  key={s.id}
                  src={s.img}
                  className="w-full flex-shrink-0 h-[200px] md:h-[400px] "
                />
              );
            })}
          </div>

          <div className="absolute top-0 h-full w-full justify-between items-center flex text-white px-5 md:px-10 text-3xl">
            <button onClick={previousSlide}>
              <BsFillArrowLeftCircleFill />
            </button>
            <button onClick={nextSlide}>
              <BsFillArrowRightCircleFill />
            </button>
          </div>

          <div className="absolute bottom-0 py-2 flex justify-center gap-3 w-full">
            {homeData.map((s, i) => {
              return (
                <div
                  onClick={() => {
                    setCurrent(i);
                  }}
                  key={"circle" + i}
                  className={`rounded-full w-2 h-2 cursor-pointer  ${
                    i == current ? "bg-white" : "bg-gray-500"
                  }`}
                ></div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
export default FirstSection;
export const NavBarIcons = ({ Icon }) => {
  return (
    <div>
      <Icon className=" text-xl text-white font-bold " />
    </div>
  );
};
export const navIcons = [
  {
    id: 1,
    icon: FaSearch,
  },
  {
    id: 2,
    icon: CiShoppingCart,
  },
  {
    id: 3,
    icon: IoMdMenu,
  },
];
