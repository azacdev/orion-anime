import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  genre: ""
}

export const genreSlice = createSlice({
  name: "genre",
  initialState,
  reducers: {
    selectGenre: (state, action) => {
        state.genre = action.payload
  }
}
})

export const { selectGenre } = genreSlice.actions;
export const setGenre = (state) => state.genre.genre;

export default genreSlice.reducer