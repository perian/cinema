import { Link, useNavigate } from 'react-router-dom';
import { Film } from '../../types/film';
import { pathToFilm } from '../../utils/routes';

type FilmCardProps = {
  film: Film;
  setActiveFilm: (film: Film | null) => void;
}

function FilmCard(props: FilmCardProps): JSX.Element {
  const { film, setActiveFilm } = props;
  const navigate = useNavigate();

  const onMouseOver = () => {
    setActiveFilm(film);
  };

  const onMouseOut = () => {
    setActiveFilm(null);
  };

  return (
    <article className="small-film-card catalog__films-card"
      data-id={film.name}
      onMouseOver={onMouseOver}
      onMouseOut={onMouseOut}
      onClick={() => navigate(pathToFilm(film.id))}
    >
      <div className="small-film-card__image">
        <img src={film.previewImage} alt={film.name} width="280" height="175" />

      </div>
      <h3 className="small-film-card__title">
        <Link to={pathToFilm(film.id)} className="small-film-card__link" >
          {film.name}
        </Link>
      </h3>
    </article>
  );
}

export default FilmCard;
