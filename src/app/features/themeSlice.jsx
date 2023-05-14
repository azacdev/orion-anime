import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    theme: "dark"
}

export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.theme = state.theme === "dark" ? "light" : "dark"
    }
  }
})

export const { toggleTheme } = themeSlice.actions;
export const selectTheme = (state) => state.theme.theme;
export default themeSlice.reducer;

