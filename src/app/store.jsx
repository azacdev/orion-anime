import { configureStore } from "@reduxjs/toolkit"
import toggleMenuReducer from "./features/toggleMenuSlice"
import themeReducer from "./features/themeSlice"

export const store = configureStore({
  reducer: {
    toggleMenu: toggleMenuReducer,
    theme: themeReducer,
  }
})