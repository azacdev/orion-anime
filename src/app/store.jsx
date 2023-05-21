import { configureStore } from "@reduxjs/toolkit"
import toggleMenuReducer from "./features/toggleMenuSlice"
import themeReducer from "./features/themeSlice"
import genreReducer from "./features/genreSlice"
import searchTermReducer from "./features/searchTermSlice"
import currentPageReducer from "./features/currentPageSlice"

export const store = configureStore({
  reducer: {
    toggleMenu: toggleMenuReducer,
    theme: themeReducer,
    genre: genreReducer,
    searchTerm: searchTermReducer,
    currentPage: currentPageReducer
  }
})