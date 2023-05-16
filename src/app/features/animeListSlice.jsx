import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const BASE_URL = 'https://anime-db.p.rapidapi.com/anime'

const options = {
  method: 'GET',
  params: {
   page: '1',
   size: '500',
  },
  headers: {
    'X-RapidAPI-Key': 'c7bf63b846msh6cc7e3d28ec4ea4p10ce26jsnf2819acfa859',
    'X-RapidAPI-Host': 'anime-db.p.rapidapi.com'
  }
};

// Generate, pending fullfilled and rejected action type 
export const fetchApiData = createAsyncThunk('data/fetchApiData', async(params) => {
  const {data} = await axios.get(
    `${BASE_URL}/?&genres=$${params}`, options
    )
  return data.data
})

console.log(fetchApiData());

const initialState = {
  loading: false,
  animeLists: [],
  error: ""
}

const animeListSlice = createSlice({
  name: 'animeList',
  initialState,
  extraReducers: (builder) => {
  builder
    .addCase(fetchApiData.pending, (state) => {
      state.loading = true
    })
    .addCase(fetchApiData.fulfilled, (state, action) => {
      state.loading = false
      state.animeLists = action.payload
      state.error = ""
      })
    .addCase(fetchApiData.rejected, (state) => {
      state.loading = false
      state.animeLists = []
      state.error = action.error.message
    });
  },
});

export const selectAnimeList = (state) => state.animeList
// export const { someSyncAction } = dataSlice.actions;
export default animeListSlice.reducer;