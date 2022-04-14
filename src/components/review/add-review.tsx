import { Link, Navigate, useParams } from 'react-router-dom';
import { Films } from '../../types/film';
import { getFilmById } from '../../utils/films';
import { pathToFilm } from '../../utils/routes';
import { AppRoutes } from '../../const';
import SubmitReview from './submit-review';

type AddReviewProps = {
  films: Films;
}

function AddReview(props: AddReviewProps): JSX.Element {
  const { films } = props;
  const { id } = useParams() as { id: string };
  const film = getFilmById(films, id);

  if (!film) {
    return <Navigate to='*' />;

  } else {
    return (
      <section className="film-card film-card--full">
        <div className="film-card__header">
          <div className="film-card__bg">
            <img src={film.backgroundImage} alt={film.name} />
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <header className="page-header">
            <div className="logo">
              <Link to={AppRoutes.Main} className="logo__link">
                <span className="logo__letter logo__letter--1">W</span>
                <span className="logo__letter logo__letter--2">T</span>
                <span className="logo__letter logo__letter--3">W</span>
              </Link>
            </div>

            <nav className="breadcrumbs">
              <ul className="breadcrumbs__list">
                <li className="breadcrumbs__item">
                  <Link to={pathToFilm(film.id)} className="breadcrumbs__link">{film.name}</Link>
                </li>
                <li className="breadcrumbs__item">
                  <a className="breadcrumbs__link">Add review</a>
                </li>
              </ul>
            </nav>

            <ul className="user-block">
              <li className="user-block__item">
                <div className="user-block__avatar">
                  <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
                </div>
              </li>
              <li className="user-block__item">
                <Link to="#" className="user-block__link">Sign out</Link>
              </li>
            </ul>
          </header>

          <div className="film-card__poster film-card__poster--small">
            <img src={film.posterImage} alt={`${film.name} poster`} width="218" height="327" />
          </div>
        </div>

        <div className="add-review">
          <form action="#" className="add-review__form">
            <div className="rating">
              <div className="rating__stars">
                <input className="rating__input" id="star-10" type="radio" name="rating" value="10" />
                <label className="rating__label" htmlFor="star-10">Rating 10</label>

                <input className="rating__input" id="star-9" type="radio" name="rating" value="9" />
                <label className="rating__label" htmlFor="star-9">Rating 9</label>

                <input className="rating__input" id="star-8" type="radio" name="rating" value="8" defaultChecked />
                <label className="rating__label" htmlFor="star-8">Rating 8</label>

                <input className="rating__input" id="star-7" type="radio" name="rating" value="7" />
                <label className="rating__label" htmlFor="star-7">Rating 7</label>

                <input className="rating__input" id="star-6" type="radio" name="rating" value="6" />
                <label className="rating__label" htmlFor="star-6">Rating 6</label>

                <input className="rating__input" id="star-5" type="radio" name="rating" value="5" />
                <label className="rating__label" htmlFor="star-5">Rating 5</label>

                <input className="rating__input" id="star-4" type="radio" name="rating" value="4" />
                <label className="rating__label" htmlFor="star-4">Rating 4</label>

                <input className="rating__input" id="star-3" type="radio" name="rating" value="3" />
                <label className="rating__label" htmlFor="star-3">Rating 3</label>

                <input className="rating__input" id="star-2" type="radio" name="rating" value="2" />
                <label className="rating__label" htmlFor="star-2">Rating 2</label>

                <input className="rating__input" id="star-1" type="radio" name="rating" value="1" />
                <label className="rating__label" htmlFor="star-1">Rating 1</label>
              </div>
            </div>

            <SubmitReview />
          </form>
        </div>

      </section>
    );
  }

}

export default AddReview;
