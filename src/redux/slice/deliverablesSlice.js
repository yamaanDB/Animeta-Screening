import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    deliverableId: "D001",
    deliverables: "Instagram Post",
    deliverableName: "Summer Collection Launch",
    finalCreatorPrice: "$500",
    finalBrandPrice: "$750",
    deliverableApproved: "Yes",
    expectedGoLiveDate: "2024-08-20",
    contentPublished: "Yes",
    contentPublishedDate: "2024-08-21",
    postLink: "https://instagram.com/p/abc123",
  },
  {
    deliverableId: "D002",
    deliverables: "YouTube Video",
    deliverableName: "Unboxing Review",
    finalCreatorPrice: "$1000",
    finalBrandPrice: "$1200",
    deliverableApproved: "Pending",
    expectedGoLiveDate: "2024-08-25",
    contentPublished: "No",
    contentPublishedDate: "",
    postLink: "",
  },
  // Add more dummy data as needed
];

const deliverablesSlice = createSlice({
  name: "deliverables",
  initialState,
  reducers: {
    updateDeliverable: (state, action) => {
      const { id, field, value } = action.payload;
      const deliverable = state.find((item) => item.deliverableId === id);
      if (deliverable) {
        console.log(`Updating ${id} - Field: ${field}, Value: ${value}`);
        deliverable[field] = value;
        console.log(`Updated deliverable:`, deliverable);
      } else {
        console.log(`Deliverable with id ${id} not found.`);
      }
    },
  },
});

export const { updateDeliverable } = deliverablesSlice.actions;
export default deliverablesSlice.reducer;
