import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import { films } from './mocks/films';

const Settings = {
  PROMO: 'The Grand Budapest Hotel',
  GENRE: 'Drama',
  YEAR: 2014,
};

ReactDOM.render(
  <React.StrictMode>
    <App
      promoFilmTitle={Settings.PROMO}
      promoFilmGenre={Settings.GENRE}
      promoFilmYear={Settings.YEAR}
      films={films}
    />
  </React.StrictMode>,
  document.getElementById('root'));
