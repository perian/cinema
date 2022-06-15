import { Film } from '../../types/film';

type DetailsProps = {
  film: Film
};

const filmRunTimeFormatted = (number: number) => {
  const hours = Math.floor(number / 60);
  const minutes = number - 60 * hours;

  if (hours) {
    return `${hours}h ${minutes}m`;
  }

  return `${minutes}m`;
};

function Details({ film }: DetailsProps): JSX.Element {
  const { runTime, director, starring, genre, released } = film;
  const formattedRunTime = filmRunTimeFormatted(runTime);

  return (
    <div className="film-card__text film-card__row">
      <div className="film-card__text-col">
        <p className="film-card__details-item">
          <strong className="film-card__details-name">Director</strong>
          <span className="film-card__details-value">{director}</span>
        </p>
        <p className="film-card__details-item">
          <strong className="film-card__details-name">Starring</strong>
          <span className="film-card__details-value">
            {starring.map((actorName) => <>{actorName}<br /></>)}
          </span>
        </p>
      </div>

      <div className="film-card__text-col">
        <p className="film-card__details-item">
          <strong className="film-card__details-name">Run Time</strong>
          <span className="film-card__details-value">{formattedRunTime}</span>
        </p>
        <p className="film-card__details-item">
          <strong className="film-card__details-name">Genre</strong>
          <span className="film-card__details-value">{genre}</span>
        </p>
        <p className="film-card__details-item">
          <strong className="film-card__details-name">Released</strong>
          <span className="film-card__details-value">{released}</span>
        </p>
      </div>
    </div>
  );
}

export default Details;
