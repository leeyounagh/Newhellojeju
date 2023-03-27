import { configureStore } from "@reduxjs/toolkit";
import UserReducer from "../slice/UserSlice";
import ContentReducer from "../slice/TravelContetSlice";
import SearchDataReducer from "../slice/SearchDataSlice";
import MapDataReducer from "../slice/MapDataSlice";
import CommunityReducer from "../slice/CommunityData";

const rootReducer = configureStore({
  reducer: {
    UserReducer,
    ContentReducer,
    SearchDataReducer,
    MapDataReducer,
    CommunityReducer,
  },
});
export default rootReducer;

export type RootState = ReturnType<typeof rootReducer.getState>;
