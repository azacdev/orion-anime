import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 1
}

export const currentPageSlice = createSlice({
  name: "currentPage",
  initialState,
  reducers: {
    incrementCurrentPage: (state) => {
      state.count += 1 
    },
    decrementCurrentPage: (state) => {
      state.count -= 1
    },
    resetCurrentPage: (state) => {
        state.count = 0
    }
  }
})

export const { incrementCurrentPage, decrementCurrentPage, resetCurrentPage } = currentPageSlice.actions
export const setCurrentPage  = (state) => state.currentPage.count;

export default currentPageSlice.reducer
