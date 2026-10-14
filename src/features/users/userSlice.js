import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "users",

  initialState: {
    searchTerm: "",
  },

  reducers: {
    setSearchTerm(state, action) {
      state.searchTerm = action.payload;
    },

    clearSearchTerm(state) {
      state.searchTerm = "";
    },
  },
});

export const {
  setSearchTerm,
  clearSearchTerm,
} = userSlice.actions;

export default userSlice.reducer;