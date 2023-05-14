import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  toggleMenu: false 
}

export const toggleMenuSlice = createSlice({
  name: "toggleMenu",
  initialState,
  reducers: {
    handleMenu: (state) => {
      state.toggleMenu = !state.toggleMenu
    }
  }
})

export const { handleMenu } = toggleMenuSlice.actions;

export default toggleMenuSlice.reducer;