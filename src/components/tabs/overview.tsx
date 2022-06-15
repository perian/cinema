import React from 'react';
import { Film } from '../../types/film';
import { convertRatingToText } from '../../utils/films';

type OverviewProps = {
  film: Film
}

function Overview({ film }: OverviewProps): JSX.Element {
  const { rating, scoresCount, description, director, starring } = film;

  return (
    <React.Fragment>
      <div className="film-rating">
        <div className="film-rating__score">{rating}</div>
        <p className="film-rating__meta">
          <span className="film-rating__level">{convertRatingToText(rating)}</span>
          <span className="film-rating__count">{scoresCount} ratings</span>
        </p>
      </div>

      <div className="film-card__text">
        <p>{description}</p>

        <p className="film-card__director">
          <strong>Director: {director}</strong>
        </p>

        <p className="film-card__starring">
          <strong>Starring: {starring.join(', ')} and other</strong>
        </p>
      </div>
    </React.Fragment>
  );
}

export default Overview;
