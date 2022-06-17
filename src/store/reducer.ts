import { createReducer } from '@reduxjs/toolkit';
import { ALL_GENRES } from '../const';
import { films } from '../mocks/films';
import { getFilms, setActiveGenre } from './actions';

export const initialState = {
  activeGenre: ALL_GENRES,
  films: films,
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setActiveGenre, (state, action) => {
      state.activeGenre = action.payload;
    })
    .addCase(getFilms, (state) => {
      state.films = films;
    });
});
