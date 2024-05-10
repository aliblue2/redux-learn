import { cartActions } from "./cart";
import { notifActions } from "./notifStore";

export const postingDataToFireBase = (cartData) => {
  return async (dispatch) => {
    dispatch(
      notifActions.showingNotifState({
        status: "pending",
        title: "pending",
        message: "pendign to send data",
      })
    );

    const postData = async () => {
      try {
        const response = await fetch(
          "https://react-database-aa549-default-rtdb.firebaseio.com/cart.json",
          {
            method: "PUT",
            body: JSON.stringify(cartData),
          }
        );

        if (response.ok) {
          dispatch(
            notifActions.showingNotifState({
              status: "success",
              title: "موفق بود",
              message: "دیتا با موفقیت ارسال شد",
            })
          );
        }
      } catch (error) {
        dispatch(
          notifActions.showingNotifState({
            status: "failed",
            title: "ناموفق ",
            message: "ارسال دیتا ناموفق بود",
          })
        );
      }
    };

    postData();
  };
};

export const fetchCartFromFireBase = () => {
  return async (dispatch) => {
    dispatch(
      notifActions.showingNotifState({
        status: "pending",
        title: "pending",
        message: "pending to fetch data",
      })
    );

    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://react-database-aa549-default-rtdb.firebaseio.com/cart.json"
        );
        if (response.ok) {
          dispatch(
            notifActions.showingNotifState({
              status: "success",
              title: "موفق بود",
              message: "دیتا با موفقیت دریافت شد",
            })
          );

          const data = await response.json();
          dispatch(cartActions.replaceCartFromStore(data));
        }
      } catch (error) {
        dispatch(
          notifActions.showingNotifState({
            status: "failed",
            title: "ناموفق ",
            message: "دریافت دیتا ناموفق بود",
          })
        );
      }
    };
    fetchData();
  };
};
