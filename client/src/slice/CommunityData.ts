import { createSlice } from "@reduxjs/toolkit";

const initialState: string[] | any = {
  list: [],
};

export const CommunityDataSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setCommunityList: (state, action) => {
      state.list = action.payload;
    },
  },
});

export const { setCommunityList } = CommunityDataSlice.actions;
export default CommunityDataSlice.reducer;
