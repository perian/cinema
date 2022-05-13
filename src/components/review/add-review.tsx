import { Link, Navigate, useParams } from 'react-router-dom';
import { Films } from '../../types/film';
import { getFilmById } from '../../utils/films';
import { pathToFilm } from '../../utils/routes';
import { AppRoutes } from '../../const';
import AddReviewForm from './add-review-form';

type AddReviewProps = {
  films: Films;
}

function AddReview(props: AddReviewProps): JSX.Element {
  const { films } = props;
  const { id } = useParams();

  if (id === undefined) {
    // console.error('id is undefined for some reason');
    return <Navigate to='*' />;
  }

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

        <AddReviewForm />
      </section>
    );
  }

}

export default AddReview;
