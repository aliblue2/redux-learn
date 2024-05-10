import { RiBardFill, RiUser2Line } from "@remixicon/react";
import DummyCources from "../Dummy-Course/DummyCourses";
import { useDispatch } from "react-redux";
import { cartActions } from "../store/cart";

const CourcesSec = () => {
  const dispatch = useDispatch();
  const addCourceToCart = (cource) => {
    dispatch(cartActions.addToCart(cource));
  };
  return (
    <section className="mt-5 md:p-5 pb-2">
      <h3 className="text-2xl font-medium text-white border-r-4 p-2 border-primaryColor w-fit ">
        آخرین دوره های سبز لرن
      </h3>
      <div className="grid md:grid-cols-4 grid-cols-2 gap-5 my-5">
        {DummyCources.map((cource) => {
          return (
            <div
              className="bg-headingColor hover:shadow-2xl cursor-pointer transition-all ease-in-out duration-300 border border-headingColor hover:border-primaryColor hover:shadow-emerald-800 rounded-2xl"
              key={cource.id}
            >
              <img
                src={cource.image}
                alt={cource.title}
                className="rounded-2xl"
              />
              <div className="flex flex-col items-start justify-between gap-2 md:h-72 p-3">
                <h5 className="text-white md:text-xl font-medium">
                  {cource.title}
                </h5>
                <p className="line-clamp-3 md:text-base text-xs text-gray-300">
                  {cource.desc}
                </p>
                <div className="w-full flex border-b pb-3 items-center justify-between">
                  <span className="flex text-sm items-center text-white justify-start gap-2">
                    <RiUser2Line size={18} />
                    {cource.teacher}
                  </span>
                  <span className="text-yellow-500 flex items-center gap-2">
                    {cource.rate}
                    <RiBardFill size={18} />
                  </span>
                </div>
                <div className="flex justify-between md:flex-row flex-col gap-3 md:gap-1 items-center w-full">
                  <h4 className="text-primaryColor md:text-lg text-base font-bold">
                    {cource.price.toLocaleString("fa-IR")}
                    <span className="text-xs px-1 text-primaryColor">
                       تومان 
                    </span>
                  </h4>
                  <button
                    onClick={() => addCourceToCart(cource)}
                    className="md:w-6/12 w-full  bg-primaryColor p-2 rounded-full text-white"
                  >
                    ثبت نام در دوره
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default CourcesSec;
