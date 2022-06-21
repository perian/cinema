import { configureStore } from '@reduxjs/toolkit';
import { filmSlice } from './filmSlice';

export const store = configureStore(filmSlice);
