import { getGenresOfAvailableFilms } from '../../utils/films';
import { useAppDispatch } from '../../hooks';
import { Films } from '../../types/film';
import { setCurrentGenre } from '../../store/filmSlice';

type GenresListProps = {
  films: Films;
  currentGenre: string;
}

function GenresList({ films, currentGenre }: GenresListProps): JSX.Element {
  const dispatch = useAppDispatch();

  return (
    <ul className="catalog__genres-list">
      {getGenresOfAvailableFilms(films).map((genre) => (
        <li className={`catalog__genres-item ${currentGenre === genre ? 'catalog__genres-item--active' : ''}`} key={genre}>
          <a
            className="catalog__genres-link"
            href="#"
            onClick={(evt) => {
              evt.preventDefault();
              dispatch(setCurrentGenre(genre));
            }}
          >
            {genre}
          </a>
        </li>
      ))}
    </ul>
  );
}

export default GenresList;
