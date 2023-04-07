import { createSlice } from "@reduxjs/toolkit";

const initialState: String | any = {
  content: "c5",
};

export const TravelContetSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setContentInformation: (state, action) => {
      state.content = action.payload;
    },
  },
});

export const { setContentInformation } = TravelContetSlice.actions;
export default TravelContetSlice.reducer;
