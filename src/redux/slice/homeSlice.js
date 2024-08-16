import { createSlice } from "@reduxjs/toolkit";

export const homeSlice = createSlice({
  name: "home",
  initialState : {
    privileges: {},
  },
  reducers: {
    updatePrevilegesState: (state= homeSlice?.initialState, action) => {
      state.privileges = action.payload;
    },
  },
});
export const homeActions = homeSlice?.actions;
export default homeSlice.reducer;
