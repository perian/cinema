import { useState } from 'react';
import { Film, Films } from '../../types/film';
import FilmCard from '../film-card/film-card';

type FilmListProps = {
  films: Films;
}

function FilmsList(props: FilmListProps): JSX.Element {
  const { films } = props;

  const [, setActiveFilm] = useState<Film | null>(null);

  const changeActiveFilm = (film:Film | null) => {
    setActiveFilm(film);
  };

  const filmsList = films.map((film) => <FilmCard key={film.id} film={film} setActiveFilm={changeActiveFilm} />);

  return (
    <div className="catalog__films-list">
      {filmsList}
    </div>
  );
}

export default FilmsList;
