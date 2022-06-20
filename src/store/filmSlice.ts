import { createSlice } from '@reduxjs/toolkit';
import { ALL_GENRES } from '../const';
import { films } from '../mocks/films';
import { filterFilmsByGenre } from '../utils/films';

export const filmSlice = createSlice({
  name: 'film',
  initialState: {
    currentGenre: ALL_GENRES,
    films: films,
  },
  reducers: {
    setCurrentGenre: (state, action) => {
      state.currentGenre = action.payload;
    },
    getFilmsByGenre: (state, action) => {
      state.films = filterFilmsByGenre(state.films, action.payload);
    },
  },
});

export const { setCurrentGenre, getFilmsByGenre } = filmSlice.actions;
export default filmSlice.reducer;
