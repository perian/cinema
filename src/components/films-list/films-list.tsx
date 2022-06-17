import { useState } from 'react';
import { Film, Films } from '../../types/film';
import { filterFilmsByGenre } from '../../utils/films';
import FilmCard from '../film-card/film-card';

type FilmsListProps = {
  films: Films,
  filmsLimit?: number,
  filterByGenre?: string,
}

function FilmsList({ films, filterByGenre, filmsLimit }: FilmsListProps): JSX.Element {
  const [, setActiveFilm] = useState<Film | null>(null);

  const filmsList =
    filterFilmsByGenre(films, filterByGenre)
      .map((film) => <FilmCard key={film.id} film={film} setActiveFilm={setActiveFilm} />);

  return (
    <div className="catalog__films-list">
      {filmsLimit
        ? filmsList.slice(0, filmsLimit)
        : filmsList}
    </div>
  );
}

export default FilmsList;


/**
 *
  const filterFilmByGenre = (films: Films, filterByGenre: string, ) => {
    if (filterByGenre === ALL_GENRES) {
      return films;
    }

    return films.filter((film) => film.genre === filterByGenre);
  }

  filterFilmByGenre(films, filterByGenre);
 */
