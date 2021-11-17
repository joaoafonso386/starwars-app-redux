import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [],
  status: "idle",
};

export const starwarsSlice = createSlice({
  name: "starwars",
  initialState,
  reducers: {
    setStarwars: (state, action) => {
      state.value = action.payload;
    },
  },
});

//Define setStarwars as an action, add extra actions here
export const { setStarwars } = starwarsSlice.actions;

//Returns the current state
export const selectStarwars = (state) => state.starwars.value;

export default starwarsSlice.reducer;
