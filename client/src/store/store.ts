import { configureStore } from "@reduxjs/toolkit";
import UserReducer from "../slice/UserSlice";
import ContentReducer from "../slice/TravelContetSlice";
import SearchDataReducer from "../slice/SearchDataSlice";
import MapDataReducer from "../slice/MapDataSlice";

const rootReducer = configureStore({
  reducer: {
    UserReducer,
    ContentReducer,
    SearchDataReducer,
    MapDataReducer,
  },
});
export default rootReducer;

export type RootState = ReturnType<typeof rootReducer.getState>;
