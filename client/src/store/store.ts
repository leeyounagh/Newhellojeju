import { configureStore } from "@reduxjs/toolkit";
import UserReducer from "../slice/UserSlice";

// const store = configureStore({
//   reducer: {
//     UserReducer,
//   },
// });

// export type RootState = ReturnType<typeof store.getState>;

// export default store;

export default configureStore({
  reducer: {
    // image대신 productImageReducer라는 이름으로 reducer임을 알수있도록 수정해서 사용하면 좋을 것 같아요.
    UserReducer,
  },
});
