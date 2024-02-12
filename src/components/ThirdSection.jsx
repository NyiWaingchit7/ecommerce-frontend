import img1 from "../asset/img/4.png";
import img2 from "../asset/img/5.png";
import img3 from "../asset/img/6.png";
import img4 from "../asset/img/7.png";

const ThirdSection = () => {
  return (
    <div className="flex gap-[0.1rem]  max-w-[1300px] p-5 md:p-20  sm:justify-center md:justify-normal mx-auto overflow-x-auto scroll-smooth scrollbar-none  ">
      <div className="relative flex-shrink-0 ">
        <img
          src={img4}
          className="rounded-lg w-[300px] h-[230px] md:w-[650px] md:h-[350px]"
        />
        <div className="absolute top-16 left-5 md:bottom-10  md:left-10 flex flex-col items-center gap-3">
          <h2 className="text-xs md:text-3xl text-white font-semibold">
            Membership Program
          </h2>
          <p className=" text-xs md:text-sm w-52 text-gray-200 text-center ">
            Be a pi vape member and get your special exclusice offer
          </p>
          <p className="p-1 px-5 rounded-xl cursor-pointer bg-gray-800 text-white text-sm">
            View
          </p>
        </div>
      </div>
      <div className="relative flex-shrink-0">
        <img
          src={img1}
          className="rounded-lg w-[150px] h-[230px] md:w-[250px] md:h-[350px]"
        />{" "}
        <div className="absolute bottom-3 -right-7 md:bottom-2  md:left-2 flex flex-col items-center gap-1">
          <h2 className="text-xs md:text-xl text-white font-semibold">
            Device
          </h2>
          <p className=" text-[0.6rem] md:text-xs  w-52 text-gray-200  text-center">
            Find the best for you here{" "}
          </p>
          <p className="p-1 px-5 rounded-xl cursor-pointer bg-gray-800 text-white text-[0.5rem] sm:text-xs">
            View
          </p>
        </div>
      </div>
      <div className=" flex gap-[0.1rem] flex-col flex-shrink-0 ">
        <div className="relative flex-shrink-0">
          <img
            src={img3}
            className="rounded-lg w-[150px] h-[115px] md:w-[200px] md:h-[173px]"
          />
          <div className="absolute bottom-3 left-5">
            <h2 className="text-xs md:text-xl  text-white font-semibold">
              Pods
            </h2>
            <p className="  text-[0.5rem] md:text-xs  w-24 text-gray-200 ">
              Variety of choices available
            </p>
          </div>
        </div>
        <div className="relative flex-shrink-0">
          <img
            src={img2}
            className="rounded-lg w-[150px] h-[115px] md:w-[200px] md:h-[173px]"
          />
          <div className="absolute bottom-3 left-5">
            <h2 className="text-xs md:text-xl  text-white font-semibold">
              Device
            </h2>
            <p className=" text-[0.5rem]  md:text-xs w-24 text-gray-200 ">
              Easy Clean and superb Flavor
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ThirdSection;
