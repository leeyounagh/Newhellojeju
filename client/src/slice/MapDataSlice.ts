import { createSlice } from "@reduxjs/toolkit";

const initialState: number | any = {
  filteredData: [],
};

export const MapDataSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setMapData: (state, action) => {
      state.filteredData = action.payload;
    },
  },
});

export const { setMapData } = MapDataSlice.actions;
export default MapDataSlice.reducer;
