import { configureStore } from "@reduxjs/toolkit"
import toggleMenuReducer from "./toggleMenuSlice"
import genreReducer from "./genreSlice"
import currentPageReducer from "./currentPageSlice"

export const store = configureStore({
  reducer: {
    toggleMenu: toggleMenuReducer,
    genre: genreReducer,
    currentPage: currentPageReducer
  }
})