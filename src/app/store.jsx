import { configureStore } from "@reduxjs/toolkit"
import toggleMenuReducer from "./features/toggleMenuSlice"

export const store = configureStore({
  reducer: {
    toggleMenu: toggleMenuReducer,
  }
})