import { configureStore } from "@reduxjs/toolkit"
import  animeListReducer from "./features/animeListSlice"
import toggleMenuReducer from "./features/toggleMenuSlice"
import themeReducer from "./features/themeSlice"
import genreReducer from "./features/genreSlice"
import searchTermReducer from "./features/searchTermSlice"

export const store = configureStore({
  reducer: {
    animeList: animeListReducer,
    toggleMenu: toggleMenuReducer,
    theme: themeReducer,
    genre: genreReducer,
    searchTerm: searchTermReducer,
  }
})