import { ALL_GENRES } from '../const';
import { Film, Films } from '../types/film';

export const getFilmById = (films: Films, id: string): Film | undefined =>
  films.find((film) => film.id === parseInt(id, 10));

export const convertRatingToText = (rating: number): string | null => {
  if (rating > 0 && rating < 3) {
    return 'Bad';
  } else if (rating >= 3 && rating < 5) {
    return 'Normal';
  } else if (rating >= 5 && rating < 8) {
    return 'Good';
  } else if (rating >= 8 && rating < 10) {
    return 'Very good';
  } else if (rating === 10) {
    return 'Awesome';
  }

  return null;
};

export const getFilmsGenres = (films: Films) => {
  const genresList = new Set(films.map((film) => film.genre));

  return [ALL_GENRES, ...genresList];
};

export const filterFilmsByGenre = (films: Films, filterByGenre: string = ALL_GENRES ) => {
  if (filterByGenre === ALL_GENRES) {
    return films;
  }

  return films.filter((film) => film.genre === filterByGenre);
};
