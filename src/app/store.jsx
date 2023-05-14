import { configureStore } from "@reduxjs/toolkit"
import toggleMenuReducer from "./features/toggleMenu/toggleMenuSlice"

export const store = configureStore({
  reducer: {
    toggleMenu: toggleMenuReducer,
  }
})