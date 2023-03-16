import { createSlice } from "@reduxjs/toolkit";

const initialState: String | any = {
  searchText: "",
};

export const SearchDataSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setSearchText: (state, action) => {
      state.searchText = action.payload;
    },
  },
});

export const { setSearchText } = SearchDataSlice.actions;
export default SearchDataSlice.reducer;
