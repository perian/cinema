import { Film, Films } from '../types/film';

export const getFilmById = (films: Films, id: string): Film | undefined =>
  films.find((film) => film.id === parseInt(id, 10));
