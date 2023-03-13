import { configureStore } from "@reduxjs/toolkit";
import UserReducer from "../slice/UserSlice";

const rootReducer = configureStore({
  reducer: {
    UserReducer,
  },
});
export default rootReducer;

export type RootState = ReturnType<typeof rootReducer.getState>;
