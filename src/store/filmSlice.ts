import { createSlice } from '@reduxjs/toolkit';
import { ALL_GENRES } from '../const';
import { films } from '../mocks/films';

export const filmSlice = createSlice({
  name: 'film',
  initialState: {
    currentGenre: ALL_GENRES,
    films: films,
    filteredFilms: films,
  },
  reducers: {
    setCurrentGenre: (state, action) => {
      state.currentGenre = action.payload;
    },
    getFilmsFilteredByGenre: (state) => {
      state.currentGenre === ALL_GENRES
        ? state.filteredFilms = state.films
        : state.filteredFilms = state.films.filter((film) => film.genre === state.currentGenre);
    },
  },
});

export const { setCurrentGenre, getFilmsFilteredByGenre } = filmSlice.actions;
export default filmSlice.reducer;
