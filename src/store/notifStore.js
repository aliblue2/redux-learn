import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  notifState: null,
};
const notifStore = createSlice({
  name: "notif",
  initialState: initialState,
  reducers: {
    showingNotifState(state, action) {
      state.notifState = {
        status: action.payload.status,
        title: action.payload.title,
        message: action.payload.message,
      };
    },
  },
});

export const notifActions = notifStore.actions;
export default notifStore.reducer;
