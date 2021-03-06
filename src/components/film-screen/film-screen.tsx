import React from 'react';
import { Link, Navigate, useNavigate, useParams } from 'react-router-dom';
import { AppRoutes } from '../../const';
import { Films } from '../../types/film';
import { getFilmById } from '../../utils/films';
import { pathToAddReview } from '../../utils/routes';
import FilmsList from '../films-list/films-list';
import Tabs from '../tabs/tabs';

type FilmScreenProps = {
  films: Films;
};

function FilmScreen({ films }: FilmScreenProps): JSX.Element {
  const { id } = useParams();
  const navigate = useNavigate();

  if (id === undefined) {
    // eslint-disable-next-line no-console
    console.error('id is undefined for some reason');
    return <Navigate to='*' />;
  }

  const film = getFilmById(films, id);

  if (!film) {
    return <Navigate to='*' />;
  } else {
    return (
      <React.Fragment>
        <section className="film-card film-card--full">
          <div className="film-card__hero">
            <div className="film-card__bg">
              <img src={film.backgroundImage} alt={film.name} />
            </div>

            <h1 className="visually-hidden">WTW</h1>

            <header className="page-header film-card__head">
              <div className="logo">
                <Link to={AppRoutes.Main} className="logo__link">
                  <span className="logo__letter logo__letter--1">W</span>
                  <span className="logo__letter logo__letter--2">T</span>
                  <span className="logo__letter logo__letter--3">W</span>
                </Link>
              </div>

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

            <div className="film-card__wrap">
              <div className="film-card__desc">
                <h2 className="film-card__title">{film.name}</h2>
                <p className="film-card__meta">
                  <span className="film-card__genre">{film.genre}</span>
                  <span className="film-card__year">{film.released}</span>
                </p>

                <div className="film-card__buttons">
                  <button className="btn btn--play film-card__button" type="button" onClick={() => navigate(`/player/${film.id}`)} >
                    <svg viewBox="0 0 19 19" width="19" height="19">
                      <use xlinkHref="#play-s"></use>
                    </svg>
                    <span>Play</span>
                  </button>
                  <button className="btn btn--list film-card__button" type="button">
                    <svg viewBox="0 0 19 20" width="19" height="20">
                      <use xlinkHref="#add"></use>
                    </svg>
                    <span>My list</span>
                  </button>
                  <Link to={pathToAddReview(film.id)} className="btn film-card__button">Add review</Link>
                </div>
              </div>
            </div>
          </div>

          <div className="film-card__wrap film-card__translate-top">
            <div className="film-card__info">
              <div className="film-card__poster film-card__poster--big">
                <img src={film.posterImage} alt={`${film.name} poster`} width="218" height="327" />
              </div>

              <Tabs film={film} />
            </div>
          </div>
        </section>

        <div className="page-content">
          <section className="catalog catalog--like-this">
            <h2 className="catalog__title">More like this</h2>

            <FilmsList currentGenre={film.genre} />
          </section>

          <footer className="page-footer">
            <div className="logo">
              <Link to={AppRoutes.Main} className="logo__link logo__link--light">
                <span className="logo__letter logo__letter--1">W</span>
                <span className="logo__letter logo__letter--2">T</span>
                <span className="logo__letter logo__letter--3">W</span>
              </Link>
            </div>

            <div className="copyright">
              <p>?? 2022 What to watch Ltd.</p>
            </div>
          </footer>
        </div>
      </React.Fragment>
    );
  }
}

export default FilmScreen;
