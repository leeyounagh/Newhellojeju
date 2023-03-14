import { configureStore } from "@reduxjs/toolkit";
import UserReducer from "../slice/UserSlice";
import ContentReducer from "../slice/TravelContetSlice";

const rootReducer = configureStore({
  reducer: {
    UserReducer,
    ContentReducer,
  },
});
export default rootReducer;

export type RootState = ReturnType<typeof rootReducer.getState>;
