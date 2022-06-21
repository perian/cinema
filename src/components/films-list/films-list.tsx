import React, { useState } from 'react';
import { Films } from '../../types/film';
import { filterFilmsByGenre } from '../../utils/films';
import FilmCard from '../film-card/film-card';
import ShowMore from '../show-more/show-more';

type FilmsListProps = {
  films: Films,
  currentGenre?: string,
}

function FilmsList({ films, currentGenre }: FilmsListProps): JSX.Element {
  const [maxFilmsToRender, setMaxFilmsToRender] = useState(8);
  const filteredFilms = filterFilmsByGenre(films, currentGenre);

  const filmsToRender = filteredFilms
    .map((film) => <FilmCard key={film.id} film={film} />)
    .slice(0, maxFilmsToRender);

  return (
    <React.Fragment>
      <div className="catalog__films-list">
        {filmsToRender}
      </div>

      {filteredFilms.length > filmsToRender.length
        ? <ShowMore setMaxFilmsToRender={setMaxFilmsToRender} />
        : null}
    </React.Fragment>
  );
}

export default FilmsList;
