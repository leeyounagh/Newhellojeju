import { createSlice } from "@reduxjs/toolkit";

const initialState: String | any = {
  user: [],
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserInformation: (state, action) => {
      state.user = [action.payload];
    },
  },
});

export const { setUserInformation } = userSlice.actions;
export default userSlice.reducer;
