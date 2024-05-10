import { RiPlayLine } from "@remixicon/react";
import heroImage from "../images/hero-dark.svg";
import ButtonPrimary from "./common/ButtonPrimary";
const Hero = () => {
  return (
    <div className="w-full grid md:grid-cols-2 mt-12 gap-5 grid-cols-1 p-5">
      <div className="flex flex-col items-start justify-center gap-10">
        <h3 className="text-white md:text-5xl text-3xl font-bold">
          آکادمی آموزش برنامه نویسی سبزلرن
        </h3>
        <h6 className="text-2xl font-medium text-white">
          با آکادمی خصوصی سبزلرن ، علم برنامه نویسی رو با خیال راحت یادبگیر و
          پیشرفت کن
        </h6>
        <div className="flex w-8/12 items-center justify-center gap-2">
          <ButtonPrimary>مسیرهای شروع</ButtonPrimary>
          <button className="flex w-full items-center text-lg text-white justify-center gap-2">
            <span className="bg-secondaryColor text-white p-2 rounded-full">
              <RiPlayLine size={24} />
            </span>
            دوره های رایگان
          </button>
        </div>
      </div>
      <img src={heroImage} id="heroImage" className="w-full p-5" alt="" />
    </div>
  );
};

export default Hero;
