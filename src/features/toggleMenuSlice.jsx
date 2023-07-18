import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  toggleMenu: false 
}

export const toggleMenuSlice = createSlice({
  name: "toggleMenu",
  initialState,
  reducers: {
    openMenu: (state) => {
      state.toggleMenu = !state.toggleMenu
    },
    closeMenu: (state) => {
      state.toggleMenu = false
    }
  }
})

export const { openMenu, closeMenu } = toggleMenuSlice.actions;
export const selectToggleMenu = (state) => state.toggleMenu.toggleMenu;

export default toggleMenuSlice.reducer;