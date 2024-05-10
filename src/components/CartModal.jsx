import { RiCloseLine, RiDeleteBin3Line } from "@remixicon/react";
import { forwardRef, useImperativeHandle, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../store/cart";
import ButtonPrimary from "./common/ButtonPrimary";
const CartModal = forwardRef(function CartModal({}, ref) {
  const dialog = useRef();
  const dispatch = useDispatch();
  const items = useSelector((state) => {
    return state.cart.items;
  });

  console.log(items);
  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      },
      clse() {
        dialog.current.close();
      },
    };
  });

  const removeCourceFromCart = (cource) => {
    dispatch(cartActions.removeFromCart(cource));
  };

  return (
    <dialog
      ref={dialog}
      className="p-5 mx-auto md:min-w-[600px] bg-headingColor backdrop:bg-primaryColor backdrop:bg-opacity-40 max-w-[600px] border border-white text-white rounded-3xl"
    >
      {items.length === 0 ? (
        <h5 className="text-primaryColor m-5 text-center text-xl font-medium">
          سبد خرید شما خالی است
        </h5>
      ) : (
        <div className="w-full flex flex-col items-center justify-start gap-5 mt-5">
          {items.map((item) => {
            return (
              <div
                className="flex items-center justify-start w-full gap-5 border-b-2 border-dashed pb-5"
                key={item.id}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="max-w-32 rounded-xl shadow-lg shadow-emerald-800"
                />
                <div className="w-full flex flex-col items-start justify-start gap-2">
                  <h4 className="text-white text-lg font-medium">
                    {item.title}
                  </h4>
                  <p className="line-clamp-2 text-xs text-gray-300">
                    {item.desc}
                  </p>
                  <div className="flex items-center w-full justify-between">
                    <h5 className="text-primaryColor text-lg font-medium">
                      {item.price.toLocaleString("fa-IR") + " تومان"}
                    </h5>{" "}
                    <RiDeleteBin3Line
                      onClick={() => removeCourceFromCart(item)}
                      size={28}
                      className="bg-red-500 text-red-50 p-1 rounded-full"
                    />
                  </div>
                </div>
              </div>
            );
          })}
          <form method="dialog" className="w-full">
            <div className="flex items-center w-full justify-between ">
              <ButtonPrimary>ثبت سفارش</ButtonPrimary>
              <button className="w-full">انصراف</button>
            </div>
          </form>
        </div>
      )}
      <form method="dialog">
        <button className="absolute top-0 left-0 p-2">
          <RiCloseLine size={32} />
        </button>
      </form>
    </dialog>
  );
});

export default CartModal;
