import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  genre: ""
}

export const genreSlice = createSlice({
  name: "genre",
  initialState,
  reducers: {
    selectedGenre: (state, action) => {
        state.genre = action.payload
  }
}
})

export const { selectedGenre } = genreSlice.actions;
export const setgenre = (state) => state.genre.genre;

export default genreSlice.reducer