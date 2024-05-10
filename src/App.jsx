import { useEffect } from "react";
import CourcesSec from "./components/CourcesSec";
import HelpSection from "./components/HelpSection";
import Hero from "./components/Hero";
import Header from "./components/common/Header";
import { useDispatch, useSelector } from "react-redux";
import Notif from "./components/Notif";
import {
  fetchCartFromFireBase,
  postingDataToFireBase,
} from "./store/cartFetchFun";

let initial = true;
function App() {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  useEffect(() => {
    dispatch(fetchCartFromFireBase());
  }, [dispatch]);

  useEffect(() => {
    if (initial) {
      initial = false;
      return;
    }
    if (cart.change) {
      dispatch(postingDataToFireBase(cart.items));
    }
  }, [cart, dispatch]);

  return (
    <div className="min-h-screen h-full bg-bgColor w-full px-5">
      <Notif />
      <Header />
      <div className="max-w-[1200px] mx-auto">
        <Hero />
        <CourcesSec />
        <HelpSection />
      </div>
    </div>
  );
}

export default App;
