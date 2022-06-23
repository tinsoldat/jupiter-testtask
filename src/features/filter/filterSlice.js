import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  value: 'Show All',
  categories: ['Show All', 'Design', 'Branding', 'Illustration', 'Motion'],
};

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setCategory(state, action) {
      state.value = action.payload;
    }
  }
});

export const { setCategory } = filterSlice.actions;

export const selectFilter = (state) => state.filter.value;
export const selectCategories = (state) => state.filter.categories;

export default filterSlice.reducer;