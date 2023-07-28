import { configureStore } from "@reduxjs/toolkit";
import toggleMenuReducer from "./toggleMenuSlice";
import { animeApi } from "./apiSlice";
import { setupListeners } from "@reduxjs/toolkit/dist/query";

export const store = configureStore({
  reducer: {
    toggleMenu: toggleMenuReducer,
    [animeApi.reducerPath]: animeApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(animeApi.middleware),
});

setupListeners(store.dispatch)
