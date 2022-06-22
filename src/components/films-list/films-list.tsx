import React, { useState } from 'react';
import { FILM_CARDS_AMOUNT_TO_RENDER } from '../../const';
import { useAppSelector } from '../../hooks';
import FilmCard from '../film-card/film-card';
import ShowMore from '../show-more/show-more';

type FilmsListProps = {
  currentGenre?: string,
}

function FilmsList({ currentGenre }: FilmsListProps): JSX.Element {
  const [maxFilmCardsToRender, setMaxFilmCardsToRender] = useState(FILM_CARDS_AMOUNT_TO_RENDER);
  const filteredFilms = useAppSelector((state) => state.filteredFilms);
  const filmsToRender = filteredFilms
    .map((film) => <FilmCard key={film.id} film={film} />)
    .slice(0, maxFilmCardsToRender);

  return (
    <React.Fragment>
      <div className="catalog__films-list">
        {filmsToRender}
      </div>

      {filteredFilms.length > filmsToRender.length
        ? <ShowMore setMaxFilmCardsToRender={setMaxFilmCardsToRender} />
        : null}
    </React.Fragment>
  );
}

export default FilmsList;
