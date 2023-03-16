import { configureStore } from "@reduxjs/toolkit";
import UserReducer from "../slice/UserSlice";
import ContentReducer from "../slice/TravelContetSlice";
import SearchDataSlice from "../slice/SearchDataSlice";

const rootReducer = configureStore({
  reducer: {
    UserReducer,
    ContentReducer,
    SearchDataSlice,
  },
});
export default rootReducer;

export type RootState = ReturnType<typeof rootReducer.getState>;
