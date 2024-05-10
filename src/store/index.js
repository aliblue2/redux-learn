import { configureStore } from "@reduxjs/toolkit";
import cartReducere from "./cart";
import notifStore from "./notifStore";
const store = configureStore({
  reducer: {
    cart: cartReducere,
    notif : notifStore
  },
});

export default store;
