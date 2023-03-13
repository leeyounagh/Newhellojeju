import { configureStore } from "@reduxjs/toolkit";
import UserReducer from "../slice/UserSlice";

const store = configureStore({
  reducer: {
    UserReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
