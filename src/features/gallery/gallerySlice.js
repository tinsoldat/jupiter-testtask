import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { fetchPhotos } from "./galleryAPI"; 

const initialState = [
  { title: 'SOFA', img: 'sofa', category: 'Design' },
  { title: 'Keyboard', img: 'keyboard', category: 'Branding' },
  { title: 'Work Media', img: 'workmedia', category: 'Illustration' },
  { title: 'DDDone', img: 'dddone', category: 'Motion' },
  { title: 'Abstract', img: 'abstract', category: 'Design' },
  { title: 'HandP', img: 'handp', category: 'Branding' },
  { title: 'Architect', img: 'architect', category: 'Motion' },
  { title: 'CalC', img: 'calc', category: 'Sport' },
  { title: 'Sport', img: 'sport', category: 'Branding' },
];

export const load = createAsyncThunk(
  'counter/fetch',
  async (amount) => {
    const response = await fetchPhotos(amount);
    return response.data;
  }
)

export const gallerySlice = createSlice({
  name: 'gallery',
  initialState,
  reducers: {
    selectPhoto(state, action) {
      console.log(action);
      const photo = state.find(photo => photo.title === action.payload);
      photo.isSelected = !photo.isSelected;
    },
    deleteSelected(state) {
      return state.filter(val => !val.isSelected);
    }
  },
  extraReducers: (builder) => {
    builder.addCase(load.fulfilled, (state, action) => {
      state.push(...action.payload);
    });
  }
});

export const { selectPhoto, deleteSelected } = gallerySlice.actions;

export const selectPhotos = (state) =>
  state.filter.value === 'Show All'
    ? state.gallery
    : state.gallery.filter(val =>
      val.category === state.filter.value
    );

export default gallerySlice.reducer;