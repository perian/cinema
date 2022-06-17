import { createAction } from '@reduxjs/toolkit';

export const setActiveGenre = createAction('films/setActiveGenre', (genre: string) => ({ payload: genre }));

export const getFilms = createAction('films/getFilms');

