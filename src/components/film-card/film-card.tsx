import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../hooks';
import { getFilmsFilteredByGenre, setCurrentGenre } from '../../store/filmSlice';
import { Film } from '../../types/film';
import { pathToFilm } from '../../utils/routes';
import VideoPLayer from '../video-player/video-player';

type FilmCardProps = {
  film: Film;
}

function FilmCard({ film }: FilmCardProps): JSX.Element {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [shouldFilmPreviewStarts, setShouldFilmPreviewStarts] = useState(false);

  const filmPreviewStars = () => {
    setShouldFilmPreviewStarts(true);
  };

  const filmPreviewStops = () => {
    setShouldFilmPreviewStarts(false);
  };

  return (
    <article className="small-film-card catalog__films-card"
      data-id={film.name}
      onMouseOver={filmPreviewStars}
      onMouseOut={filmPreviewStops}
      onClick={() => {
        navigate(pathToFilm(film.id));
        dispatch(setCurrentGenre(film.genre));
        dispatch(getFilmsFilteredByGenre());
      }}
    >
      <VideoPLayer
        posterImg={film.previewImage}
        videoLink={film.videoLink}
        shouldFilmPreviewStarts={shouldFilmPreviewStarts}
      />
      <h3 className="small-film-card__title">
        <Link to={pathToFilm(film.id)} className="small-film-card__link" >
          {film.name}
        </Link>
      </h3>
    </article>
  );
}

export default FilmCard;
