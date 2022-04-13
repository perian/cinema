import moment from 'moment';
import { Route, useNavigate, useParams } from 'react-router-dom';
import { Films } from '../../types/film';
import { getFilmById } from '../../utils/films';
import PageNotFound from '../page-not-found/page-not-found';

type PlayerProps = {
  films: Films;
};

function Player(props: PlayerProps): JSX.Element {
  const { films } = props;
  const { id } = useParams() as { id: string };
  const film = getFilmById(films, id);
  const navigate = useNavigate();
  const BACK = -1;
  const formattedRunTime = (seconds: number): string =>
    seconds < 3600
      ? moment.utc(seconds * 1000).format('mm:ss')
      : moment.utc(seconds * 1000).format('HH:mm:ss');

  if (!film) {
    return <Route path='*' element={<PageNotFound />} />;
  } else {
    const runTime = formattedRunTime(film.runTime);

    return (
      <div className="player">
        <video src={film.videoLink} className="player__video" poster='img/player-poster.jpg'></video>

        <button type="button" className="player__exit" onClick={() => navigate(BACK)}>
          Exit
        </button>

        <div className="player__controls">
          <div className="player__controls-row">
            <div className="player__time">
              <progress className="player__progress" value="30" max="100"></progress>
              <div className="player__toggler" style={{ left: '30%' }}>Toggler</div>
            </div>
            <div className="player__time-value">{runTime}</div>
          </div>

          <div className="player__controls-row">
            <button type="button" className="player__play">
              <svg viewBox="0 0 19 19" width="19" height="19">
                <use xlinkHref="#play-s"></use>
              </svg>
              <span>Play</span>
            </button>
            <div className="player__name">{film.name}</div>

            <button type="button" className="player__full-screen">
              <svg viewBox="0 0 27 27" width="27" height="27">
                <use xlinkHref="#full-screen"></use>
              </svg>
              <span>Full screen</span>
            </button>
          </div>
        </div>
      </div>
    );
  }
}
export default Player;
