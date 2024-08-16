import { createSlice } from "@reduxjs/toolkit";

export const uiSlice = createSlice({
  name: "ui",
  initialState: { theme: "light-theme" },
  reducers: {
    // eslint-disable-next-line no-undef
    toggleTheme: (state = uiSlice?.initialState, action) => {
      state.theme = action.payload;
    },
  },
});
export const uiSliceAction = uiSlice.actions;
export default uiSlice.reducer;
