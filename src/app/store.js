import { configureStore } from '@reduxjs/toolkit';
import filterReducer from '../features/filter/filterSlice';
import galleryReducer from '../features/gallery/gallerySlice';

export const store = configureStore({
  reducer: {
    filter: filterReducer,
    gallery: galleryReducer,
  },
});
