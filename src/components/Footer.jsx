import { contacts, customerServicesData } from "../utils/data";
import { languages } from "../utils/data";
import qrCode from "../asset/img/qrcode.png";
import { payments } from "../utils/data";
import { followUsImg } from "../utils/data";
const Footer = () => {
  return (
    <div className="max-w-[1300px] p-5 md:p-16 mx:5 md:mx-auto text-sm md:text-lg">
      <div className=" flex justify-start gap-x-20 gap-y-5 flex-wrap">
        <div>
          <h2 className="text-xl font-semibold ">Customer Services</h2>
          <div>
            {customerServicesData.map((d) => (
              <div className="mt-2" key={d.id}>
                <Services Icon={d.icon} description={d.description} />
              </div>
            ))}
          </div>
        </div>
        <div>
          <h2 className="text-xl font-semibold ">Languages</h2>
          <div>
            {languages.map((d, index) => (
              <div className="mt-2" key={d.id}>
                <div class="flex items-center">
                  <input
                    type="radio"
                    name="default-radio"
                    class=" text-blue-600 bg-gray-100"
                    defaultChecked={index == 1}
                  />
                  <label for="default-radio-1" class="ms-2 font-semibold">
                    {d.language}
                  </label>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div>
          <h2 className="text-xl font-semibold ">Contact Us</h2>
          {contacts.map((d) => (
            <Services Icon={d.icon} description={d.description} key={d.id} />
          ))}
        </div>
        <div>
          <h2 className="text-xl font-semibold ">Download Our App</h2>
          <img src={qrCode} className="w-[150px]" />
        </div>
        <div>
          <h2 className="text-xl font-semibold">Payment</h2>
          <div className="flex gap-1 mt-2">
            {payments.map((d) => (
              <img src={d.img} className="w-[90px]" key={d.id} />
            ))}
          </div>
        </div>
        <div>
          <h2 className="text-xl font-semibold">Follow us on</h2>
          <div className="flex gap-1 items-center mt-2">
            {followUsImg.map((d) => (
              <img src={d.social} className="w-[40px]" key={d.id} />
            ))}
          </div>
        </div>
      </div>
      <p className="text-center text-gray-400 mt-5 text-xs sm:text-[1rem]">
        @Copyright 2023 C by D Co.Ltd. All rights reserved{" "}
      </p>
    </div>
  );
};

export default Footer;
export const Services = ({ Icon, description }) => {
  return (
    <div className="flex items-center gap-2 mt-2">
      <Icon className="font-semibold" />
      <h3 className="font-semibold max-w-xs">{description}</h3>
    </div>
  );
};
