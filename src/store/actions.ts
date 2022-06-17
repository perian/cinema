import { createAction } from "@reduxjs/toolkit";
import { Films } from "../types/film";

export const setActiveGenre = createAction('films/setActiveGenre', (genre: string) => ({payload: genre}));

export const getFilms = createAction('films/getFilms');

