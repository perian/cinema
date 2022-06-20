import { Films } from '../../types/film';
import { filterFilmsByGenre } from '../../utils/films';
import FilmCard from '../film-card/film-card';

type FilmsListProps = {
  films: Films,
  filmsLimit?: number,
  genre?: string,
}

function FilmsList({ films, genre, filmsLimit }: FilmsListProps): JSX.Element {
  const filmsList = filterFilmsByGenre(films, genre)
    .map((film) => <FilmCard key={film.id} film={film} />);

  return (
    <div className="catalog__films-list">
      {filmsLimit
        ? filmsList.slice(0, filmsLimit)
        : filmsList}
    </div>
  );
}

export default FilmsList;
