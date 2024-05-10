import {
  RiCloudLine,
  RiCodeLine,
  RiGitBranchLine,
  RiHome3Fill,
  RiLoginBoxLine,
  RiShoppingBasket2Line,
} from "@remixicon/react";
import LogoImage from "../../images/logo.webp";
import { useRef } from "react";
import CartModal from "../CartModal";
import { useSelector } from "react-redux";
const Header = () => {
  const modal = useRef();
  const itemsLength = useSelector((state) => state.cart.items.length);
  const modalVisibilityHandler = () => {
    modal.current.open();
  };
  return (
    <>
      <CartModal ref={modal} />
      <div className="w-full sticky top-0 gap-5 flex items-center justify-between md:h-20 rounded-b-3xl p-5 bg-headingColor shadow-2xl shadow-emerald-800 border-b-2 border-primaryColor">
        <div className="w-full">
          <nav className="md:block hidden">
            <ul className="hidden justify-between w-full items-center md:flex">
              <li className="text-white flex items-center p-1 rounded-md px-2  hover:bg-white hover:bg-opacity-20 py-1 transition-colors duration-300 cursor-pointer justify-around gap-2">
                <RiHome3Fill size={20} />
                خانه
              </li>
              <li className="text-white flex items-center p-1 rounded-md px-2  hover:bg-white hover:bg-opacity-20 py-1 transition-colors duration-300 cursor-pointer justify-around gap-2">
                <RiCloudLine size={20} />
                فضای ابری !
              </li>
              <li className="text-white flex items-center p-1 rounded-md px-2  hover:bg-white hover:bg-opacity-20 py-1 transition-colors duration-300 cursor-pointer justify-around gap-2">
                <RiCodeLine size={20} />
                دوره ها
              </li>
              <li className="text-white flex items-center p-1 rounded-md px-2  hover:bg-white hover:bg-opacity-20 py-1 transition-colors duration-300 cursor-pointer justify-around gap-2">
                <RiGitBranchLine size={20} />
                گیت هاب
              </li>
            </ul>
          </nav>
          <button className="md:hidden block rounded-full p-2 relative bg-white ">
            <RiLoginBoxLine size={20} />
          </button>
        </div>
        <div className="w-full flex items-center justify-center md:gap-5 gap-2">
          <h2 className="md:text-4xl text-2xl font-bold text-white">سبزلرن</h2>
          <img
            src={LogoImage}
            alt="logo sabz learn"
            className="md:max-w-20 max-w-14"
          />
        </div>
        <div className="w-full flex items-center justify-center gap-5">
          <button className="bg-white md:flex hidden items-center justify-center gap-2 px-4 py-2 rounded-full ">
            <RiLoginBoxLine size={20} />
            ورود/عضویت
          </button>
          <button
            className="bg-white md:flex hidden items-center justify-center gap-1 px-4 py-2 rounded-full "
            onClick={modalVisibilityHandler}
          >
            <RiShoppingBasket2Line size={20} />
            سبد خرید
            <span>{itemsLength}</span>
          </button>
          <button
            onClick={modalVisibilityHandler}
            className="md:hidden block rounded-full p-2 relative bg-white "
          >
            <RiShoppingBasket2Line size={20} />
          </button>
        </div>
      </div>
    </>
  );
};

export default Header;
