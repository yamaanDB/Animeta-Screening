import { createSlice } from "@reduxjs/toolkit";

export const basicSlice = createSlice({
  name: "basic",
  initialState: {
    residentTypes: [],
    propertyTypes: [],
    propertyId: "",
    basicDetails: null,
    tabStatus: false,
    tabDirty: false
  },
  reducers: {
    updateResidentTypes: (state = basicSlice?.initialState, action) => {
      const data = action.payload?.data || [];
      const residentTypes = data.map((o) => ({
        value: o._id,
        label: o.residentType,
        ...o,
      }));
      state.residentTypes = [...residentTypes];
    },
    updatePropertyTypes: (state = basicSlice?.initialState, action) => {
      const data = action.payload?.data || [];
      const propertyTypes = data.map((o) => ({
        value: o._id,
        label: o.name,
        ...o,
      }));
      state.propertyTypes = [...propertyTypes];
    },
    setPropertyId: (state = basicSlice?.initialState, action) => {
      state.propertyId = action.payload;
    },
    setBasicDetails: (state = basicSlice?.initialState, action) => {
      state.basicDetails = action.payload;
    },
    setTabStatus: (state = basicSlice?.initialState, action) => {
      state.tabStatus = !state.tabStatus;
    },
    setTabDirty: (state = basicSlice?.initialState, action) => {
      state.tabDirty = action.payload;
    },
  },
});
export const {
  updateResidentTypes,
  updatePropertyTypes,
  setPropertyId,
  setBasicDetails,
  setTabStatus,
  setTabDirty,
} = basicSlice.actions;
export default basicSlice.reducer;
