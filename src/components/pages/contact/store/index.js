import { createSlice } from "@reduxjs/toolkit";

export const contactMaster = createSlice({
  name: "contactMaster",
  initialState: {
    contactList: [
      {
        id: 1,
        firstName: "Abhay",
        lastName: "Tiwari",
        status: "Inactive",
      },
      { id: 2, firstName: "Kajal", lastName: "Sriman", status: "inactive" },
    ],
    loader: true,
    totalPages: 0,
    selected: null,
  },
  reducers: {
    selectContact: (state, action) => {
      if (action.payload === null) {
        state.selected = null;
      } else {
        state.selected = action.payload;
      }
    },
    setLoader: (state, action) => {
      state.loader = action.payload;
    },
    addContact: (state, action) => {
      state.contactList = [...state.contactList, action.payload];
    },
    editContact: (state, action) => {
      console.log("action.payload", action.payload);
      state.contactList = action.payload;
    },
    deleteContact: (state, action) => {
      state.contactList = action.payload;
    },
  },
});

export const {
  selectContact,
  addContact,
  editContact,
  deleteContact,
  setLoader,
} = contactMaster.actions;

export default contactMaster.reducer;
