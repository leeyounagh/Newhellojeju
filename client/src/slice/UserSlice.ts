import { createSlice } from "@reduxjs/toolkit";

const initialState: String[] | any[] = [];

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserInformation: (state, action) => {
      state.push(action.payload);
    },
  },
});

export const { setUserInformation } = userSlice.actions;
export default userSlice.reducer;
